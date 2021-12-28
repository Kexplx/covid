import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { SharedModule } from '../shared/shared.module';
import { SettingsFormComponent } from './settings-form/settings-form.component';
import { UsersBarChartComponent } from './users-bar-chart/users-bar-chart.component';
import { DistrictAutoCompleteComponent } from './settings-form/district-auto-complete/district-auto-complete.component';

const routes: Routes = [{ path: '', component: SettingsComponent }];

@NgModule({
  declarations: [SettingsComponent, SettingsFormComponent, UsersBarChartComponent, DistrictAutoCompleteComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class SettingsModule {}
