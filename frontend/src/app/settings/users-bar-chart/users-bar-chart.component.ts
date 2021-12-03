import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { Chart, ChartConfiguration, ChartData, registerables } from 'chart.js';
import { FingerprintDocument } from 'src/app/fingerprint.service';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-users-bar-chart',
  templateUrl: './users-bar-chart.component.html',
  styleUrls: ['./users-bar-chart.component.css'],
})
export class UsersBarChartComponent implements AfterViewInit, OnDestroy {
  @Input() fingerprintDocuments!: FingerprintDocument[];
  chart?: Chart;

  ngAfterViewInit() {
    this.drawChart();
  }

  ngOnDestroy() {
    this.chart?.destroy();
  }

  private drawChart() {
    Chart.register(...registerables);

    const labels = this.fingerprintDocuments
      .map((doc, i) => {
        if (i === 0) {
          return 'Heute';
        }

        const date = new Date(doc.created);
        const day = date.getDate();
        const month = date.getMonth() + 1;

        return `${day}.${month}`;
      })
      .reverse();

    const data: ChartData = {
      labels: labels,

      datasets: [
        {
          data: this.fingerprintDocuments.map(doc => doc.fingerprints.length).reverse(),
          datalabels: {
            color: 'rgb(50, 50, 50)',
            align: 'center',
            padding: 0,
            font: { size: 13, weight: 700 },
          },
          backgroundColor: [
            ...Array(this.fingerprintDocuments.length - 1).fill('rgba(201, 203, 207, 0.2)'),
            'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [...Array(this.fingerprintDocuments.length - 1).fill('rgb(201, 203, 207)'), 'rgb(54, 162, 235)'],
          borderWidth: 1,
        },
      ],
    };

    const config: ChartConfiguration = {
      type: 'bar',
      data,
      plugins: [ChartDataLabels],
      options: {
        plugins: {
          legend: { display: false },
        },
        scales: {
          y: {
            display: false,
          },
          x: {
            display: true,
            grid: { display: true, drawOnChartArea: false, drawBorder: true, drawTicks: true },
          },
        },
        animation: false,
      },
    };

    this.chart = new Chart(document.getElementById('usersbarchart') as any, config as any);
  }
}
