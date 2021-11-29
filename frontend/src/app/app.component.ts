import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { DataService } from './data.service';
import { SwipeService } from './swipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  tabIndex = 0;
  isDailyStatsVisible = true;

  data$ = this.dataService.data$.pipe(
    tap(d => {
      if (d) {
        this.isLoading = false;
      }
    }),
  );

  isLoading = true;

  constructor(private dataService: DataService, private swipeService: SwipeService) {}

  ngOnInit() {
    const queryParams = new URLSearchParams(window.location.search);
    if (queryParams.has('t')) {
      this.tabIndex = Number(queryParams.get('t'));
    }

    this.swipeService.swipeRight$.subscribe(() => this.onLeftSwipe());
    this.swipeService.swipeLeft$.subscribe(() => this.onRightSwipe());
  }

  onTabChange(tabIndex: number): void {
    this.tabIndex = tabIndex;
    this.updateCurrentTabIndexInUrl();
  }

  onUpdateClick() {
    this.isLoading = true;
    this.dataService.loadData();
  }

  updateCurrentTabIndexInUrl() {
    const newurl = `${window.location.protocol}//${window.location.host}${window.location.pathname}?t=${this.tabIndex}`;
    window.history.pushState({ path: newurl }, '', newurl);
  }

  onLeftSwipe() {
    if (this.tabIndex === 5) {
      // We're already at the last
      // index to we ignore the swipe.
      return;
    }

    this.tabIndex++;
    this.updateCurrentTabIndexInUrl();
  }

  onRightSwipe() {
    if (this.tabIndex === 0) {
      // We're already at the first
      // index to we ignore the swipe.
      return;
    }

    this.tabIndex--;
    this.updateCurrentTabIndexInUrl();
  }
}
