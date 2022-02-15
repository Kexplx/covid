import { Component, Inject, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { ENVIRONMENT_TOKEN, Environment } from '../environment-provider';
import { UpdateService } from '../update.service';
import { SettingsFormComponent } from './settings-form/settings-form.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {
  data$ = this.dataService.data$;
  localSha = this.environment.localSha;

  hasUpdate$ = this.updateService.hasUpdate$;

  @ViewChild(SettingsFormComponent) settingsForm?: SettingsFormComponent;

  constructor(
    @Inject(ENVIRONMENT_TOKEN) private environment: Environment,
    private dataService: DataService,
    private updateService: UpdateService,
  ) {}
}
