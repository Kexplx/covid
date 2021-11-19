import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { GermanyTableComponent } from './home/germany-table/germany-table.component';
import { BavariaTableComponent } from './home/bavaria-table/bavaria-table.component';
import { DistrictsTableComponent } from './home/districts-table/districts-table.component';
import { JokeOfTheDayComponent } from './joke/joke-of-the-day/joke-of-the-day.component';
import { DistrictsPipe } from './home/districts-table/districts.pipe';
import { GermanyHistoryComponent } from './history/germany-history/germany-history.component';
import { LineChartComponent } from './history/line-chart/line-chart.component';
import { DistrictHistoryComponent } from './history/district-history/district-history.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SettingsComponent } from './settings/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    GermanyTableComponent,
    BavariaTableComponent,
    DistrictsTableComponent,
    JokeOfTheDayComponent,
    DistrictsPipe,
    GermanyHistoryComponent,
    LineChartComponent,
    DistrictHistoryComponent,
    ContactFormComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
