import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { HttpClientModule } from "@angular/common/http";
import { GermanyTableComponent } from './home/germany-table/germany-table.component';
import { BavariaTableComponent } from './home/bavaria-table/bavaria-table.component';
import { DistrictsTableComponent } from './home/districts-table/districts-table.component';

@NgModule({
  declarations: [AppComponent, GermanyTableComponent, BavariaTableComponent, DistrictsTableComponent],
  imports: [BrowserModule, SharedModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
