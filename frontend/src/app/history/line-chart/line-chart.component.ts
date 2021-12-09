import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnDestroy, ViewChild } from '@angular/core';

import { Chart, ChartConfiguration, ChartData, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { ThousandPointPipe } from 'src/app/shared/thousand-point.pipe';

export interface Dataset {
  label?: string;
  data: number[];
  color: string;
}

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent implements OnChanges, AfterViewInit, OnDestroy {
  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;

  @Input() rawData!: number[];
  @Input() labels!: string[];

  @Input() showLegend = false;
  @Input() datasets!: Dataset[];
  @Input() paddingTop = 0;
  @Input() paddingBot = 0;

  chart?: Chart;

  constructor(private thousandPointsPipe: ThousandPointPipe) {}

  ngOnChanges() {
    if (this.chart) {
      this.chart.destroy();
      this.drawChart();
    }
  }

  ngAfterViewInit() {
    this.drawChart();
  }

  ngOnDestroy() {
    // Important!
    // Otherwise memory leak.
    this.chart?.destroy();
  }

  private drawChart() {
    Chart.register(...registerables);

    const data: ChartData = {
      labels: this.labels,
      datasets: this.datasets.map(d => ({
        datalabels: {
          color: 'black',
          formatter: d => this.thousandPointsPipe.transform(d),
          align: 'top',
          padding: 3,
          font: { size: 11, weight: 500, family: 'Segoe UI' },
        },
        borderWidth: 2,
        pointRadius: 3,
        pointBorderWidth: 2,
        tension: 0.4,
        borderColor: d.color,
        pointBackgroundColor: (ctx: any) => (ctx.dataIndex === 0 ? 'white' : d.color),
        data: d.data,
        label: d.label,
      })),
    };

    const config: ChartConfiguration = {
      type: 'line',
      data: data,
      plugins: [ChartDataLabels],
      options: {
        plugins: {
          legend: {
            display: this.showLegend,
            position: 'bottom',
            labels: { pointStyle: 'circle', boxHeight: 5, boxWidth: 5, usePointStyle: true },
          },
          tooltip: { enabled: false },
        },
        scales: {
          y: {
            display: false,
            suggestedMax: Math.max(...this.datasets.map(d => d.data).flat()) + this.paddingTop,
            suggestedMin: Math.min(...this.datasets.map(d => d.data).flat()) - this.paddingBot,
          },
          x: {
            display: true,
            grid: { display: true, drawBorder: true, drawTicks: true },
          },
        },
        layout: {
          padding: { top: 0, bottom: 0, right: 20, left: 20 },
        },
        animation: false,
      },
    };

    this.chart = new Chart(this.canvas.nativeElement, config);
  }
}
