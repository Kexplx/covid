import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TabSetComponent } from './tab-set/tab-set.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { GermanDatePipe } from './german-date.pipe';
import { IncidenceTagComponent } from './incidence-tag/incidence-tag.component';
import { RoundPipe } from './round.pipe';
import { ThousandPointPipe } from './thousand-point.pipe';
import { SelectComponent } from './select/select.component';
import { DistrictNamePipe } from './district-name.pipe';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    ButtonComponent,
    TabSetComponent,
    SpinnerComponent,
    GermanDatePipe,
    IncidenceTagComponent,
    RoundPipe,
    ThousandPointPipe,
    SelectComponent,
    DistrictNamePipe,
    AlertComponent,
  ],
  imports: [CommonModule],
  exports: [
    ButtonComponent,
    SelectComponent,
    GermanDatePipe,
    TabSetComponent,
    AlertComponent,
    DistrictNamePipe,
    ThousandPointPipe,
    RoundPipe,
    SpinnerComponent,
    IncidenceTagComponent,
  ],
  providers: [DistrictNamePipe, ThousandPointPipe, GermanDatePipe],
})
export class SharedModule {}
