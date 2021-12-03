import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { CovidDailyComponent } from './covid-daily/covid-daily.component';
import { DiffComponent } from './covid-daily/diff/diff.component';
import { UpdateDialogComponent } from './update-dialog/update-dialog.component';

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
  { path: 'news', loadChildren: () => import('./news/news.module').then(m => m.NewsModule) },
];

@NgModule({
  declarations: [AppComponent, CovidDailyComponent, DiffComponent, UpdateDialogComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), SharedModule, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
