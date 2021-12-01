import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { JokeOfTheDayComponent } from './joke-of-the-day.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [{ path: '', component: JokeOfTheDayComponent }];

@NgModule({
  declarations: [JokeOfTheDayComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class JokeOfTheDayModule {}
