import { Component } from "@angular/core";
import { map, Observable } from "rxjs";
import { State, StateNames, StateService } from "src/app/state.service";
import { Vaccination, VaccinationService } from "src/app/vaccination.service";

@Component({
  selector: "app-bavaria-table",
  templateUrl: "./bavaria-table.component.html",
  styleUrls: ["./bavaria-table.component.css"],
})
export class BavariaTableComponent {
  bavaria$: Observable<State | null> = this.stateService.bavariaHistory$.pipe(
    map((bh) => {
      if (!bh) {
        return null;
      }

      return bh[0];
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
    private stateService: StateService,
    private vaccinationService: VaccinationService
  ) {}

  onUpdateClick() {
    this.stateService.loadStateHistory(StateNames.Bavaria);
    this.vaccinationService.loadVaccinationHistory();
  }
}
