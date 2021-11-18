import { Component } from "@angular/core";
import { TabIndex } from "./shared/tab-set/tab-set.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  tabIndex = 0;

  onTabChange(tabIndex: TabIndex): void {
    this.tabIndex = tabIndex;
  }
}
