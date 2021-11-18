import { Component, Input, OnInit } from "@angular/core";
import { District } from "src/app/district.service";
import { SelectOption } from "src/app/shared/select/select.component";

@Component({
  selector: "app-district-history",
  templateUrl: "./district-history.component.html",
  styleUrls: ["./district-history.component.css"],
})
export class DistrictHistoryComponent implements OnInit {
  @Input() listOfDistrictHistories!: District[][];
  options: SelectOption[] = [];

  lastUpdated = "";

  // Regensburg
  initialValue = 9362;

  rawData: number[] = [];
  labels: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.options = this.listOfDistrictHistories.map((history) => {
      const district = history[0];

      return { name: district.name, value: district.code };
    });

    this.prepareChartData(this.initialValue);
  }

  onSelect(option: SelectOption) {
    this.prepareChartData(option.value);
  }

  private prepareChartData(districtCode: number) {
    const historyToDisplay = this.listOfDistrictHistories.find(
      (h) => h[0].code === districtCode
    ) as District[];

    this.rawData = historyToDisplay!
      .map((germany) => Math.round(germany.incidence))
      .reverse();

    this.labels = historyToDisplay
      .map((district) => {
        const pattern = /(\d+\.\d+).*/;

        return pattern.exec(district.lastUpdated)![1];
      })
      .reverse();

    this.lastUpdated = historyToDisplay[0].lastUpdated.replace(
      /, 00:00 Uhr/,
      ""
    );
  }
}
