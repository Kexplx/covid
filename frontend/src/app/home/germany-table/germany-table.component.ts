import { Component } from "@angular/core";
import { map, Observable } from "rxjs";
import { Germany, GermanyService } from "src/app/germany.service";
import { Vaccination, VaccinationService } from "src/app/vaccination.service";

@Component({
  selector: "app-germany-table",
  templateUrl: "./germany-table.component.html",
  styleUrls: ["./germany-table.component.css"],
})
export class GermanyTableComponent {
  germany$: Observable<Germany | null> =
    this.germanyService.germanyHistory$.pipe(
      map((history) => {
        if (!history) {
          return null;
        }

        return history[0];
      })
    );

  vaccination$: Observable<Vaccination | null> =
    this.vaccinationService.vaccinationHistory$.pipe(
      map((vaccinationHistory) => {
        if (!vaccinationHistory) {
          return null;
        }

        return vaccinationHistory[0];
      })
    );

  constructor(
    private germanyService: GermanyService,
    private vaccinationService: VaccinationService
  ) {}

  onUpdateClick() {
    this.germanyService.loadGermany();
    this.vaccinationService.loadVaccinationHistory();
  }
}
