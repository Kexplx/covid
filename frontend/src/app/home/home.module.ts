import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { GermanyTableComponent } from './germany-table/germany-table.component';
import { DistrictsTableComponent } from './districts-table/districts-table.component';
import { BavariaTableComponent } from './bavaria-table/bavaria-table.component';
import { ColContentComponent } from './col-content/col-content.component';
import { DistrictsPipe } from './districts-table/districts.pipe';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [
    HomeComponent,
    GermanyTableComponent,
    DistrictsTableComponent,
    BavariaTableComponent,
    ColContentComponent,
    DistrictsPipe,
  ],
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeModule {}
