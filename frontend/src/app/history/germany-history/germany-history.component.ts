import { Component, Input, OnInit } from "@angular/core";
import { Germany } from "src/app/germany.service";

@Component({
  selector: "app-germany-history",
  templateUrl: "./germany-history.component.html",
  styleUrls: ["./germany-history.component.css"],
})
export class GermanyHistoryComponent implements OnInit {
  @Input() germanyHistory!: Germany[];
  rawData: number[] = [];
  labels: string[] = [];
  lastUpdated = "";

  constructor() {}

  ngOnInit(): void {
    this.rawData = this.germanyHistory
      .map((germany) => Math.round(germany.incidence))
      .reverse();

    this.labels = this.germanyHistory
      .map((germany) => {
        const date = new Date(germany.lastUpdated);

        return `${date.getDate()}.${date.getMonth() + 1}`;
      })
      .reverse();

    this.lastUpdated = this.germanyHistory[0].lastUpdated;
  }
}
