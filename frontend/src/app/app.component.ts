import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataService } from './data.service';
import { SwipeService } from './swipe.service';
import { UpdateService } from './update.service';

// Has to match the routes in `app.module.ts`
const routes = ['home', 'history', 'top-districts', 'joke-of-the-day', 'contact', 'settings'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  hasUpdate$ = this.updateService.hasUpdate$;
  isCovidDailyVisible = false;
  isUpdateDialogVisible = false;
  lastUpdated = '';

  data$ = this.dataService.data$.pipe(
    tap(d => {
      if (d) {
        this.isLoading = false;
        this.lastUpdated = d.lastUpdated;
      } else {
        this.lastUpdated = '';
      }
    }),
  );

  isLoading = true;

  constructor(
    private dataService: DataService,
    private updateService: UpdateService,
    private swipeService: SwipeService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.swipeService.swipeRight$.subscribe(() => this.onLeftSwipe());
    this.swipeService.swipeLeft$.subscribe(() => this.onRightSwipe());
  }

  onUpdateClick() {
    this.isLoading = true;
    this.dataService.loadData();
  }

  onLeftSwipe() {
    const nextRoute = this.getNextRoute();

    if (nextRoute) {
      this.router.navigateByUrl(`/${nextRoute}`);
    }
  }

  onRightSwipe() {
    const prevRoute = this.getPrevRoute();

    if (prevRoute) {
      this.router.navigateByUrl(`/${prevRoute}`);
    }
  }

  private getPrevRoute(): string {
    const currentRouteIndex = this.getCurrentRouteIndex();

    if (currentRouteIndex > 0) {
      return routes[currentRouteIndex - 1];
    }

    return '';
  }

  private getNextRoute(): string {
    const currentRouteIndex = this.getCurrentRouteIndex();

    if (currentRouteIndex + 1 < routes.length) {
      return routes[currentRouteIndex + 1];
    }

    return '';
  }

  private getCurrentRouteIndex() {
    const currentRoute = /\/([^\/]*)$/.exec(window.location.pathname)![1];
    const currentRouteIndex = routes.indexOf(currentRoute);

    return currentRouteIndex;
  }
}
