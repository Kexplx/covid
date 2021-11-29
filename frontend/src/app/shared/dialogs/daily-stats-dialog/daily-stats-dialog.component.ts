import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppData } from 'src/app/data.service';
import { SettingsService } from 'src/app/settings.service';

@Component({
  selector: 'app-daily-stats-dialog',
  templateUrl: './daily-stats-dialog.component.html',
  styleUrls: ['./daily-stats-dialog.component.css'],
})
export class DailyStatsDialogComponent implements OnInit {
  @Input() data!: AppData;
  @Output() close = new EventEmitter();

  newCases = 391293;

  incidenceGermany = 420;
  incidenceGermanyDiffToYesterday = 23;

  incidenceDistrict = 892;
  incidenceDistrictDiffToYesterday = -70;
  districtName = '';

  constructor(private settingsService: SettingsService) {}

  ngOnInit(): void {
    this.newCases = this.data.germanyHistory[0].newCases;

    this.incidenceGermany = this.data.germanyHistory[0].incidence;
    this.incidenceGermanyDiffToYesterday = this.incidenceGermany - this.data.germanyHistory[1].incidence;

    const districtHistory = this.data.listOfDistrictHistories.find(
      h => h[0].code === this.settingsService.settings.favoriteDistrictCode,
    );
    this.incidenceDistrict = districtHistory![0].incidence;
    this.incidenceDistrictDiffToYesterday = this.incidenceDistrict - districtHistory![1].incidence;
    this.districtName = districtHistory![0].name;
  }

  onClose() {
    this.close.emit();
  }
}
