import { Component, Input, OnInit } from "@angular/core";
import { District } from "src/app/district.service";

@Component({
  selector: "app-districts-table",
  templateUrl: "./districts-table.component.html",
  styleUrls: ["./districts-table.component.css"],
})
export class DistrictsTableComponent implements OnInit {
  @Input() districts!: District[];

  ngOnInit() {
    // Sort ascending by incidence.
    this.districts = this.districts.sort((a, b) => a.incidence - b.incidence);
  }
}
