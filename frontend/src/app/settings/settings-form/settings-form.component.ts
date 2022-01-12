import { Component, Input, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { District } from 'src/app/district.service';
import { LocationService } from 'src/app/location.service';
import { Settings, SettingsService } from 'src/app/settings.service';
import { DistrictPreview } from './district-auto-complete/district-auto-complete.component';

@Component({
  selector: 'app-settings-form',
  templateUrl: './settings-form.component.html',
  styleUrls: ['./settings-form.component.css'],
})
export class SettingsFormComponent implements OnDestroy {
  @Input() listOfDistrictHistories!: District[][];

  decimalPointsControl = new FormControl(this.settingsService.settings.decimalPoints, [
    Validators.required,
    Validators.min(0),
    Validators.max(10),
  ]);

  selectedDistricts = [...this.settingsService.settings.districts];
  favoriteDistrictCode? = this.settingsService.settings.favoriteDistrictCode;

  currentUserLocation = '';
  currentUserLocationHasError = false;

  isSuccessAlertVisible = false;
  isErrorAlertVisible = false;

  lastAddedDistrictPreview?: DistrictPreview;

  districtDataOutOfSync = false;

  constructor(
    private settingsService: SettingsService,
    private dataService: DataService,
    private locationService: LocationService,
  ) {}

  ngOnDestroy(): void {
    if (this.districtDataOutOfSync) {
      this.dataService.loadData();
    }
  }

  onSave() {
    this.districtDataOutOfSync = this.isDistrictDataOutOfSync();

    const settings: Settings = {
      decimalPoints: this.decimalPointsControl.value,
      districts: this.selectedDistricts,
      favoriteDistrictCode: this.favoriteDistrictCode,
    };

    this.settingsService.setSettings(settings);
    this.isSuccessAlertVisible = true;
    this.isErrorAlertVisible = false;
  }

  private isDistrictDataOutOfSync() {
    const oldDistricts = this.settingsService.settings.districts;
    const newDistricts = this.selectedDistricts;

    if (newDistricts.length != oldDistricts.length) {
      return true;
    } else if (!oldDistricts.every(sD => newDistricts.find(oD => oD.code === sD.code))) {
      return true;
    } else {
      return false;
    }
  }

  onDistrictSelect(districtPreview: DistrictPreview) {
    const isAlreadySelected = this.selectedDistricts.find(d => d.code === districtPreview.code) !== undefined;

    if (isAlreadySelected) {
      return;
    }

    this.selectedDistricts = [districtPreview, ...this.selectedDistricts];
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

  onGetLocation() {
    this.currentUserLocationHasError = false;
    this.currentUserLocation = '';

    this.locationService.getLocation().subscribe({
      next: loc => {
        this.currentUserLocation = `${loc.districtName}, ${loc.stateName}`;
      },
      error: () => (this.currentUserLocationHasError = true),
    });
  }
}
