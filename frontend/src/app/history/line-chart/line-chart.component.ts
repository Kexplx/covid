import { AfterViewInit, Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';

import { Chart, ChartConfiguration, ChartData, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { CHART_COLORS } from '../chart-colors';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent implements OnChanges, AfterViewInit {
  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;

  @Input() rawData!: number[];
  @Input() labels!: string[];

  chart?: Chart;

  ngOnChanges() {
    if (this.chart) {
      this.chart.destroy();
      this.drawChart();
    }
  }

  ngAfterViewInit() {
    this.drawChart();
  }

  private drawChart() {
    Chart.register(...registerables);

    const data: ChartData = {
      labels: this.labels,
      datasets: [
        {
          datalabels: { color: 'black', align: 'top', padding: 3, font: { size: 11, weight: 500, family: 'Segoe UI' } },
          borderWidth: 2,
          pointRadius: 3,
          pointBorderWidth: 2,
          borderColor: CHART_COLORS.red,
          data: this.rawData,
          tension: 0.4,
        },
      ],
    };

    const config: ChartConfiguration = {
      type: 'line',
      data: data,
      plugins: [ChartDataLabels],
      options: {
        plugins: { legend: { display: false } },
        scales: {
          y: {
            display: false,
            suggestedMax: Math.max(...this.rawData) + 20,
            suggestedMin: Math.min(...this.rawData) - 10,
          },
          x: {
            display: true,
            grid: { display: true, drawBorder: true, drawTicks: true },
          },
        },
        elements: {
          point: {
            backgroundColor: (ctx: any) => (ctx.dataIndex === 1 ? 'white' : CHART_COLORS.red),
          },
        },
        layout: {
          padding: { top: 0, bottom: 0 },
        },
      },
    };

    this.chart = new Chart(this.canvas.nativeElement, config);
  }
}
