import { Injectable } from '@angular/core';
import { districtPreviews } from './district-previews';
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
    const query = new URLSearchParams(location.search);
    const codesQuery = query.get('codes');

    if (codesQuery) {
      // The visitor's URL contains district codes in its query param "codes".
      // We add these districts to the users settings and reload the page,
      // this time without any query params.

      const codes = codesQuery.split(',').map(codeAsString => Number(codeAsString));

      const settings: Settings = {
        ...defaultSettings,
        districts: districtPreviews.filter(dp => codes.includes(dp.code)),
        favoriteDistrictCode: codes[0],
      };

      this.setSettings(settings);

      // Reload current URL without any query params.
      // After the reload, the user's districts will be
      // in his settings and we enter the "else" block.
      location.href = location.href.split('?')[0];
    } else {
      this.loadSettingsFromLocalStorage();
    }
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
