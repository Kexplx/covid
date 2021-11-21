import { AfterViewInit, Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';

import { Chart, ChartConfiguration, ChartData, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { CHART_COLORS } from '../chart-colors';

@Component({
  selector: 'app-line-chart-two',
  templateUrl: './line-chart-two.component.html',
  styleUrls: ['./line-chart-two.component.css'],
})
export class LineChartTwoComponent implements OnChanges, AfterViewInit {
  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;

  @Input() rawData1!: number[];
  @Input() rawData2!: number[];
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
          datalabels: { color: 'black', align: 'top', padding: 5 },
          borderWidth: 2,
          pointRadius: 4,
          pointBorderWidth: 2,
          borderColor: CHART_COLORS.grey,
          pointBackgroundColor: (ctx: any) => (ctx.dataIndex === 1 ? 'white' : CHART_COLORS.grey),
          data: this.rawData1,
          tension: 0.4,
          label: 'Deutschland',
        },
        {
          datalabels: { color: 'black', align: 'top', padding: 5 },
          borderWidth: 2,
          pointRadius: 4,
          pointBackgroundColor: (ctx: any) => (ctx.dataIndex === 1 ? 'white' : CHART_COLORS.blue),
          pointBorderWidth: 2,
          borderColor: CHART_COLORS.blue,
          data: this.rawData2,
          tension: 0.4,
          label: 'Bayern',
        },
      ],
    };

    const config: ChartConfiguration = {
      type: 'line',
      data: data,
      plugins: [ChartDataLabels],
      options: {
        plugins: { legend: { display: true } },
        scales: {
          y: {
            display: false,
            suggestedMax: Math.max(...this.rawData1, ...this.rawData2) + 1,
            suggestedMin: Math.min(...this.rawData1, ...this.rawData1),
          },
          x: {
            display: true,
            grid: { display: true, drawBorder: true, drawTicks: true },
          },
        },
        elements: {
          point: {
            backgroundColor: (ctx: any) => {
              console.log(ctx);
              return 'white';
            },
          },
        },
        animation: false,
      },
    };

    this.chart = new Chart(this.canvas.nativeElement, config);
  }
}
