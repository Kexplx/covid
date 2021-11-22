import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  tabIndex = 0;

  data$ = this.dataService.data$.pipe(
    tap(d => {
      if (d) {
        this.isLoading = false;
      }
    }),
  );

  isLoading = true;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    const queryParams = new URLSearchParams(window.location.search);
    if (queryParams.has('t')) {
      this.tabIndex = Number(queryParams.get('t'));
    }
  }

  onTabChange(tabIndex: number): void {
    this.tabIndex = tabIndex;
    this.updateCurrentTabIndexInUrl(tabIndex);
  }

  onUpdateClick() {
    this.isLoading = true;
    this.dataService.loadData();
  }

  updateCurrentTabIndexInUrl(tabIndex: number) {
    const newurl = `${window.location.protocol}//${window.location.host}${window.location.pathname}?t=${tabIndex}`;
    window.history.pushState({ path: newurl }, '', newurl);
  }
}
