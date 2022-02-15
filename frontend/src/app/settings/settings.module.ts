import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { SharedModule } from '../shared/shared.module';
import { SettingsFormComponent } from './settings-form/settings-form.component';
import { UsersBarChartComponent } from './users-bar-chart/users-bar-chart.component';
import { DistrictAutoCompleteComponent } from './settings-form/district-auto-complete/district-auto-complete.component';
import { DiscardChangedDialogComponent } from './settings-form/discard-changed-dialog/discard-changed-dialog.component';
import { LeaveSettingsGuardService } from './settings-form/leave-settings-guard.service';

const routes: Routes = [{ path: '', component: SettingsComponent, canDeactivate: [LeaveSettingsGuardService] }];

@NgModule({
  declarations: [
    SettingsComponent,
    SettingsFormComponent,
    UsersBarChartComponent,
    DistrictAutoCompleteComponent,
    DiscardChangedDialogComponent,
  ],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class SettingsModule {}
