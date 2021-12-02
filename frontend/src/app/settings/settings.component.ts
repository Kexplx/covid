import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataService } from '../data.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {
  data$ = this.dataService.data$;
  localSha = environment.localSha;

  constructor(private dataService: DataService) {}
}
