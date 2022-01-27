import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';
import { SharedModule } from '../shared/shared.module';
import { InstallTutorialComponent } from './install-tutorial/install-tutorial.component';

const routes: Routes = [{ path: '', component: ContactComponent }];

@NgModule({
  declarations: [ContactComponent, InstallTutorialComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class ContactModule {}
