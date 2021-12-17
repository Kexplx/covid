import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataService } from '../data.service';
import { UpdateService } from '../update.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {
  data$ = this.dataService.data$;
  localSha = environment.localSha;

  hasUpdate$ = this.updateService.hasUpdate$;

  constructor(private dataService: DataService, private updateService: UpdateService) {}
}
