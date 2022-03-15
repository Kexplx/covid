import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

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

  @Input() labels!: string[];

  @Input() showLegend = false;
  @Input() datasets!: Dataset[];

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
      labels: this.thinOut(this.labels),
      datasets: this.datasets.map(d => ({
        datalabels: {
          color: 'black',
          formatter: d => this.thousandPointsPipe.transform(d),
          align: 'top',
          padding: 3,
          font: { size: 11, weight: 'bold' },
        },
        borderWidth: 2,
        pointRadius: 3,
        pointBorderWidth: 2,
        tension: 0.4,
        borderColor: d.color,
        pointBackgroundColor: d.color,
        data: this.thinOut(d.data),
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
          },
          x: {
            display: true,
            grid: { display: true, drawBorder: true, drawTicks: true },
          },
        },
        layout: {
          padding: { top: 15, bottom: 0, right: 20, left: 20 },
        },
        animation: false,
      },
    };

    this.chart = new Chart(this.canvas.nativeElement, config);
  }

  private thinOut<T>(arr: T[], max = 8) {
    const step = Math.floor(arr.length / max);

    const result: T[] = [];
    for (let i = arr.length - 1; i >= 0; i -= step) {
      result.push(arr[i]);

      if (result.length === max) {
        break;
      }
    }

    return result.reverse();
  }
}
