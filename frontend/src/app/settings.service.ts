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
    { code: 9563, name: 'Fürth', type: 'Kreisfreihe Stadt' },
    { code: 9562, name: 'Erlangen', type: 'Kreisfreihe Stadt' },
    { code: 9564, name: 'Nürnberg', type: 'Kreisfreihe Stadt' },
  ],
  favoriteDistrictCode: 9562,
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
