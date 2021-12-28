import { Component, Input, OnInit } from '@angular/core';
import { District } from 'src/app/district.service';
import { SettingsService } from 'src/app/settings.service';
import { DistrictNamePipe } from 'src/app/shared/district-name.pipe';
import { SelectOption } from 'src/app/shared/select/select.component';
import { CHART_COLORS } from '../chart-colors';
import { Dataset } from '../line-chart/line-chart.component';

@Component({
  selector: 'app-district-history',
  templateUrl: './district-history.component.html',
  styleUrls: ['./district-history.component.css'],
})
export class DistrictHistoryComponent implements OnInit {
  @Input() listOfDistrictHistories!: District[][];
  options: SelectOption[] = [];

  dataset: Dataset = { data: [], color: CHART_COLORS.red };
  labels: string[] = [];

  initalDistrictCode = 0;

  constructor(private districtNamePipe: DistrictNamePipe, private settingsService: SettingsService) {}

  ngOnInit(): void {
    this.options = this.listOfDistrictHistories.map(history => {
      const district = history[0];

      return { name: this.districtNamePipe.transform(district), value: district.code };
    });

    // If possible use the code of the favorite district.
    // If it's null, use the code of the first distrct.
    this.initalDistrictCode = this.settingsService.settings.favoriteDistrictCode || this.options[0].value;

    this.prepareChartData(this.initalDistrictCode);
  }

  onSelect(option: SelectOption) {
    this.prepareChartData(option.value);
  }

  private prepareChartData(districtCode: number) {
    const historyToDisplay = this.listOfDistrictHistories.find(h => h[0].code === districtCode) as District[];

    this.dataset.data = historyToDisplay!.map(germany => Math.round(germany.incidence)).reverse();

    this.labels = historyToDisplay
      .map(district => {
        const date = new Date(district.lastUpdated);
        const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
        const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

        return `${day}.${month}`;
      })
      .reverse();
  }
}
