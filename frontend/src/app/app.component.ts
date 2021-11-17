import { Component } from "@angular/core";
import { GermanyService } from "./germany.service";
import { TabIndex } from "./shared/tab-set/tab-set.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  tabIndex = 0;

  // constructor(private germanyService: GermanyService) {}

  onTabChange(tabIndex: TabIndex): void {
    this.tabIndex = tabIndex;
  }
}
