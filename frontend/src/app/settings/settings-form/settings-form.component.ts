import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { District } from 'src/app/district.service';
import { Settings, SettingsService } from 'src/app/settings.service';
import { DistrictNamePipe } from 'src/app/shared/district-name.pipe';
import { SelectOption } from 'src/app/shared/select/select.component';

@Component({
  selector: 'app-settings-form',
  templateUrl: './settings-form.component.html',
  styleUrls: ['./settings-form.component.css'],
})
export class SettingsFormComponent implements OnInit {
  @Input() listOfDistrictHistories!: District[][];

  decimalPointsControl = new FormControl(this.settingsService.settings.decimalPoints, [
    Validators.required,
    Validators.min(0),
    Validators.max(10),
  ]);

  isSuccessAlertVisible = false;

  selectedDistrictCode: number = 0;
  options: SelectOption[] = [];

  constructor(private settingsService: SettingsService, private districtNamePipe: DistrictNamePipe) {}

  ngOnInit() {
    this.options = this.listOfDistrictHistories.map(history => {
      const district = history[0];

      return { name: this.districtNamePipe.transform(district), value: district.code };
    });

    this.selectedDistrictCode = this.settingsService.settings.favoriteDistrictCode;
  }

  onSave() {
    const settings: Settings = {
      decimalPoints: this.decimalPointsControl.value,
      favoriteDistrictCode: this.selectedDistrictCode,
    };

    this.settingsService.setSettings(settings);
    this.isSuccessAlertVisible = true;
  }

  onSelect(option: SelectOption) {
    this.selectedDistrictCode = option.value;
  }
}
