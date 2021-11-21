import { Component, Input, OnInit } from '@angular/core';
import { District } from 'src/app/district.service';
import { SettingsService } from 'src/app/settings.service';
import { DistrictNamePipe } from 'src/app/shared/district-name.pipe';
import { SelectOption } from 'src/app/shared/select/select.component';
import { CHART_COLORS } from '../chart-colors';

@Component({
  selector: 'app-district-history',
  templateUrl: './district-history.component.html',
  styleUrls: ['./district-history.component.css'],
})
export class DistrictHistoryComponent implements OnInit {
  @Input() listOfDistrictHistories!: District[][];
  options: SelectOption[] = [];

  lastUpdated = '';

  initialValue = this.settingsService.settings.favoriteDistrictCode;

  dataset: { data: number[]; color: string } = { data: [], color: CHART_COLORS.red };
  labels: string[] = [];

  constructor(private districtNamePipe: DistrictNamePipe, private settingsService: SettingsService) {}

  ngOnInit(): void {
    this.options = this.listOfDistrictHistories.map(history => {
      const district = history[0];

      return { name: this.districtNamePipe.transform(district), value: district.code };
    });

    this.prepareChartData(this.initialValue);
  }

  onSelect(option: SelectOption) {
    this.prepareChartData(option.value);
  }

  private prepareChartData(districtCode: number) {
    const historyToDisplay = this.listOfDistrictHistories.find(h => h[0].code === districtCode) as District[];

    this.dataset.data = historyToDisplay!.map(germany => Math.round(germany.incidence)).reverse();

    this.labels = historyToDisplay
      .map(district => {
        const pattern = /(\d+\.\d+).*/;

        return pattern.exec(district.lastUpdated)![1];
      })
      .reverse();

    this.lastUpdated = historyToDisplay[0].lastUpdated.replace(/, 00:00 Uhr/, '');
  }
}
