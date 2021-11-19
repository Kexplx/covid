import { Component, Input, OnInit } from '@angular/core';
import { District } from 'src/app/district.service';
import { SettingsService } from 'src/app/settings.service';

@Component({
  selector: 'app-districts-table',
  templateUrl: './districts-table.component.html',
  styleUrls: ['./districts-table.component.css'],
})
export class DistrictsTableComponent implements OnInit {
  @Input() districts!: District[];

  favoriteDistrictCode = this.settingsService.settings.favoriteDistrictCode;

  constructor(private settingsService: SettingsService) {}

  ngOnInit() {
    // Sort ascending by incidence.
    this.districts = this.districts.sort((a, b) => a.incidence - b.incidence);
  }
}
