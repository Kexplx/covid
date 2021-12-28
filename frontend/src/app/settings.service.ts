import { Injectable } from '@angular/core';
import { DistrictPreview } from './settings/settings-form/district-auto-complete/district-auto-complete.component';

const SETTINGS_KEY = 'inzidenz-app-settings';

export interface Settings {
  decimalPoints: number;
  districts: DistrictPreview[];
  favoriteDistrictCode?: number;
}

const defaultSettings: Settings = {
  decimalPoints: 0,
  districts: [
    { code: 9362, name: 'Regensburg', type: 'Kreisfreihe Stadt' },
    { code: 9562, name: 'Erlangen', type: 'Kreisfreihe Stadt' },
    { code: 9162, name: 'München', type: 'Kreisfreihe Stadt' },
    { code: 9564, name: 'Nürnberg', type: 'Kreisfreihe Stadt' },
    { code: 9179, name: 'Fürstenfeldbruck', type: 'Landkreis' },
    { code: 9372, name: 'Cham', type: 'Landkreis' },
    { code: 9278, name: 'Straubing-Bogen', type: 'Landkreis' },
    { code: 9663, name: 'Würzburg', type: 'Kreisfreihe Stadt' },
    { code: 11007, name: 'Berlin Tempelhof-Schöneberg', type: 'Bezirk' },
    { code: 14713, name: 'Leipzig', type: 'Kreisfreihe Stadt' },
  ],
  favoriteDistrictCode: 9362,
};

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  settings: Settings = defaultSettings;

  constructor() {
    this.loadSettingsFromLocalStorage();
  }

  setSettings(settings: Settings) {
    this.settings = settings;

    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  }

  clearSettings() {
    localStorage.removeItem(SETTINGS_KEY);

    this.settings = defaultSettings;
  }

  private loadSettingsFromLocalStorage() {
    const settingsJson = localStorage.getItem(SETTINGS_KEY);

    if (settingsJson) {
      this.settings = JSON.parse(settingsJson);

      if (!this.settings.districts) {
        this.settings.districts = defaultSettings.districts;
      }
    }
  }
}
