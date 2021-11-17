import { Component, OnInit } from "@angular/core";
import { map } from "rxjs";
import { DistrictService } from "src/app/district.service";

@Component({
  selector: "app-districts-table",
  templateUrl: "./districts-table.component.html",
  styleUrls: ["./districts-table.component.css"],
})
export class DistrictsTableComponent implements OnInit {
  districts$ = this.districtService.listOfDistrictHistories$.pipe(
    map((districtHistory) => {
      if (!districtHistory) {
        return null;
      }

      return districtHistory
        .map((dh) => dh[0])
        .sort((a, b) => a.incidence - b.incidence);
    })
  );

  constructor(private districtService: DistrictService) {}

  ngOnInit(): void {}

  onUpdateClick() {
    this.districtService.loadListOfDistrictHistories();
  }
}
