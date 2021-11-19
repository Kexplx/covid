import { Injectable } from '@angular/core';

const SETTINGS_KEY = 'inzidenz-app-settings';

export interface Settings {
  decimalPoints: number;
  favoriteDistrictCode: number;
}

const defaultSettings: Settings = {
  decimalPoints: 0,
  favoriteDistrictCode: 9362, // Regensburg
};

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  settings: Settings = defaultSettings;

  constructor() {
    this.loadSettings();
  }

  setSettings(settings: Settings) {
    this.settings = settings;

    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  }

  clearSettings() {
    localStorage.removeItem(SETTINGS_KEY);

    this.settings = defaultSettings;
  }

  private loadSettings() {
    const settingsJson = localStorage.getItem(SETTINGS_KEY);

    if (settingsJson) {
      this.settings = JSON.parse(settingsJson);
    }
  }
}
