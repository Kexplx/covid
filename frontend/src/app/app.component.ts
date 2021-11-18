import { Component } from "@angular/core";
import { tap } from "rxjs";
import { DataService } from "./data.service";
import { TabIndex } from "./shared/tab-set/tab-set.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  tabIndex = 0;

  data$ = this.dataService.data$.pipe(
    tap((d) => {
      if (d) {
        this.isLoading = false;
      }
    })
  );

  isLoading = true;

  options = [
    { name: "Regensburg", value: 1 },
    { name: "München", value: 2 },
    { name: "Berlin", value: 3 },
  ];

  constructor(private dataService: DataService) {}

  onTabChange(tabIndex: TabIndex): void {
    this.tabIndex = tabIndex;
  }

  onUpdateClick() {
    this.isLoading = true;
    this.dataService.loadData();
  }
}
