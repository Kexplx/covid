import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HistoryComponent } from './history.component';
import { SharedModule } from '../shared/shared.module';
import { DistrictHistoryComponent } from './district-history/district-history.component';
import { GermanyHistoryComponent } from './germany-history/germany-history.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { GermanyNewInfectionsComponent } from './germany-new-infections/germany-new-infections.component';

const routes: Routes = [{ path: '', component: HistoryComponent }];

@NgModule({
  declarations: [
    HistoryComponent,
    DistrictHistoryComponent,
    GermanyHistoryComponent,
    LineChartComponent,
    GermanyNewInfectionsComponent,
  ],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class HistoryModule {}
