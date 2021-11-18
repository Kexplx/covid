import { Component, Input } from "@angular/core";
import { map, Observable } from "rxjs";
import { Germany, GermanyService } from "src/app/germany.service";
import { Vaccination, VaccinationService } from "src/app/vaccination.service";

@Component({
  selector: "app-germany-table",
  templateUrl: "./germany-table.component.html",
  styleUrls: ["./germany-table.component.css"],
})
export class GermanyTableComponent {
  @Input() germany!: Germany;
  @Input() vaccination!: Vaccination;
}
