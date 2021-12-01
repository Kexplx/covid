import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [{ path: '', component: ContactComponent }];

@NgModule({
  declarations: [ContactComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class ContactModule {}
