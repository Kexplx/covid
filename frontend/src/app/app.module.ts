import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NavigationEnd, Router, RouterModule, Routes } from '@angular/router';
import { CovidDailyComponent } from './covid-daily/covid-daily.component';
import { DiffComponent } from './covid-daily/diff/diff.component';
import { UpdateDialogComponent } from './update-dialog/update-dialog.component';
import { environmentProvider } from './environment-provider';
import { filter } from 'rxjs';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },

  {
    path: 'home',
    loadChildren: () => import(/* webpackPrefetch: true */ './home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'history',
    loadChildren: () => import(/* webpackPrefetch: true */ './history/history.module').then(m => m.HistoryModule),
  },
  {
    path: 'top-districts',
    loadChildren: () =>
      import(/* webpackPrefetch: true */ './top-districts/top-districts.module').then(m => m.TopDistrictsModule),
  },
  {
    path: 'contact',
    loadChildren: () => import(/* webpackPrefetch: true */ './contact/contact.module').then(m => m.ContactModule),
  },
  {
    path: 'settings',
    loadChildren: () => import(/* webpackPrefetch: true */ './settings/settings.module').then(m => m.SettingsModule),
  },
  {
    path: 'joke-of-the-day',
    loadChildren: () =>
      import(/* webpackPrefetch: true */ './joke-of-the-day/joke-of-the-day.module').then(m => m.JokeOfTheDayModule),
  },
];

@NgModule({
  declarations: [AppComponent, CovidDailyComponent, DiffComponent, UpdateDialogComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), SharedModule, HttpClientModule],
  bootstrap: [AppComponent],
  providers: [environmentProvider],
})
export class AppModule {
  constructor(private router: Router, private title: Title) {
    this.changeTitleOnNavigation();

    const route = new URLSearchParams(window.location.search).get('route');

    if (route) {
      router.navigateByUrl(`/${route}`);
    }
  }

  private changeTitleOnNavigation() {
    this.router.events?.pipe(filter(this.isNavigationEnd)).subscribe(navEnd => {
      switch (navEnd.url) {
        case '/home':
          this.title.setTitle('Covidat / Home');
          break;
        case '/history':
          this.title.setTitle('Covidat / Historie');
          break;
        case '/top-districts':
          this.title.setTitle('Covidat / Bestenliste');
          break;
        case '/joke-of-the-day':
          this.title.setTitle('Covidat / Joke of the Day');
          break;
        case '/contact':
          this.title.setTitle('Covidat / Kontakt');
          break;
        case '/settings':
          this.title.setTitle('Covidat / Einstellungen');
          break;
        default:
          // Invalid route.
          break;
      }
    });
  }

  private isNavigationEnd(event: any): event is NavigationEnd {
    return event instanceof NavigationEnd;
  }
}
