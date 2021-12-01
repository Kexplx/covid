import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopDistrictsComponent } from './top-districts.component';
import { TopDistrictsListComponent } from './top-districts-list/top-districts-list.component';
import { DistrictCardComponent } from './district-card/district-card.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [{ path: '', component: TopDistrictsComponent }];

@NgModule({
  declarations: [TopDistrictsComponent, TopDistrictsListComponent, DistrictCardComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class TopDistrictsModule {}
