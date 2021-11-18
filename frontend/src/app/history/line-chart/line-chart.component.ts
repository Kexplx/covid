import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  ViewChild,
} from "@angular/core";

import { Chart, ChartConfiguration, ChartData, registerables } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

@Component({
  selector: "app-line-chart",
  templateUrl: "./line-chart.component.html",
  styleUrls: ["./line-chart.component.css"],
})
export class LineChartComponent implements OnChanges, AfterViewInit {
  @ViewChild("canvas") canvas!: ElementRef<HTMLCanvasElement>;

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
          datalabels: { color: "black", align: "top", padding: 5 },
          pointRadius: 4,
          borderWidth: 2,
          pointBorderWidth: 1,

          borderColor: "black",
          data: this.rawData,
          tension: 0.2,
        },
      ],
    };

    const config: ChartConfiguration = {
      type: "line",
      data: data,
      plugins: [ChartDataLabels],
      options: {
        plugins: { legend: { display: false } },
        scales: {
          y: { display: false },
          x: {
            display: true,
            grid: { display: true, drawBorder: true, drawTicks: true },
          },
        },
        elements: {
          point: {
            backgroundColor: (ctx: any) =>
              ctx.dataIndex === 1 ? "#e74c3c" : "black",
          },
        },
        layout: {
          padding: { top: 25, bottom: 10 },
        },
        animation: false,
      },
    };

    this.chart = new Chart(this.canvas.nativeElement, config);
  }
}
