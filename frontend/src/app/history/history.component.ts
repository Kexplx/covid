import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent {
  data$ = this.dataService.data$;

  constructor(private dataService: DataService) {}

  onDaysSelect(days: number) {
    this.dataService.loadLaterHistories(days);
  }
}
