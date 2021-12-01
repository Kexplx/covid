import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { SharedModule } from '../shared/shared.module';
import { SettingsFormComponent } from './settings-form/settings-form.component';

const routes: Routes = [{ path: '', component: SettingsComponent }];

@NgModule({
  declarations: [SettingsComponent, SettingsFormComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class SettingsModule {}
