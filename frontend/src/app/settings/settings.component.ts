import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataService } from '../data.service';
import { UpdateService } from '../update.service';
import { getDiffBetweenDatesInDays } from '../utils/date';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {
  data$ = this.dataService.data$;
  localSha = environment.localSha;

  hasUpdate$ = this.updateService.hasUpdate$;

  daysWithUserCounting = getDiffBetweenDatesInDays(new Date(), new Date('2021-12-01T16:34:51.245Z'));

  constructor(private dataService: DataService, private updateService: UpdateService) {}
}
