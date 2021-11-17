import { Component } from "@angular/core";
import { map, Observable } from "rxjs";
import { State, StateNames, StateService } from "src/app/state.service";

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

  constructor(private stateService: StateService) {}

  onUpdateClick() {
    this.stateService.loadStateHistory(StateNames.Bavaria);
  }
}
