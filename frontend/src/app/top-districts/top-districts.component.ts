import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-top-districts',
  templateUrl: './top-districts.component.html',
  styleUrls: ['./top-districts.component.css'],
})
export class TopDistrictsComponent {
  data$ = this.dataService.data$;

  constructor(private dataService: DataService) {}
}
