import { Component } from "@angular/core";
import { map, Observable } from "rxjs";
import { Germany, GermanyService } from "src/app/germany.service";

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

  constructor(private germanyService: GermanyService) {}

  onUpdateClick() {
    this.germanyService.loadGermany();
  }
}
