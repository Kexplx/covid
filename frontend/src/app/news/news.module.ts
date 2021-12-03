import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [{ path: '', component: NewsComponent }];

@NgModule({
  declarations: [NewsComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class NewsModule {}
