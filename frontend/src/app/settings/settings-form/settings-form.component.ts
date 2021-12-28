import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { District } from 'src/app/district.service';
import { Settings, SettingsService } from 'src/app/settings.service';
import { DistrictPreview } from './district-auto-complete/district-auto-complete.component';

@Component({
  selector: 'app-settings-form',
  templateUrl: './settings-form.component.html',
  styleUrls: ['./settings-form.component.css'],
})
export class SettingsFormComponent {
  @Input() listOfDistrictHistories!: District[][];

  decimalPointsControl = new FormControl(this.settingsService.settings.decimalPoints, [
    Validators.required,
    Validators.min(0),
    Validators.max(10),
  ]);

  selectedDistricts = [...this.settingsService.settings.districts];
  favoriteDistrictCode? = this.settingsService.settings.favoriteDistrictCode;

  isSuccessAlertVisible = false;
  isErrorAlertVisible = false;

  lastAddedDistrictPreview?: DistrictPreview;

  constructor(private settingsService: SettingsService) {}

  onSave() {
    const settings: Settings = {
      decimalPoints: this.decimalPointsControl.value,
      districts: this.selectedDistricts,
      favoriteDistrictCode: this.favoriteDistrictCode,
    };

    this.settingsService.setSettings(settings);
    this.isSuccessAlertVisible = true;
    this.isErrorAlertVisible = false;
  }

  onDistrictSelect(districtPreview: DistrictPreview) {
    const isAlreadySelected = this.selectedDistricts.find(d => d.code === districtPreview.code) !== undefined;

    if (isAlreadySelected) {
      return;
    }

    this.selectedDistricts.push(districtPreview);
    this.isErrorAlertVisible = false;
    this.lastAddedDistrictPreview = districtPreview;
  }

  onDistrictRemove(districtPreview: DistrictPreview) {
    this.lastAddedDistrictPreview = undefined;

    if (this.selectedDistricts.length === 1) {
      // We must at least have one district remaining.
      this.isErrorAlertVisible = true;
      return;
    }

    const indexOf = this.selectedDistricts.findIndex(d => d.code === districtPreview.code);
    this.selectedDistricts.splice(indexOf, 1);

    if (districtPreview.code === this.favoriteDistrictCode) {
      // District was the current favorite.
      this.favoriteDistrictCode = undefined;
    }
  }

  onMakeFavorite(districtPreview: DistrictPreview) {
    this.favoriteDistrictCode = districtPreview.code;
  }
}
