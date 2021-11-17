import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { environment } from "src/environments/environment";

export interface Vaccination {
  lastUpdated: string;
  numberOfPeopleAtLeastOnceVaccinated: number;
  numberOfPeopleFullyVaccinated: number;
  percentAtLeastOnceVaccinated: number;
  percentFullyVaccinated: number;
  totalNumberOfVaccinations: number;
  bavaria_numberOfPeopleAtLeastOnceVaccinated: number;
  bavaria_numberOfPeopleFullyVaccinated: number;
  bavaria_percentAtLeastOnceVaccinated: number;
  bavaria_percentFullyVaccinated: number;
}

@Injectable({
  providedIn: "root",
})
export class VaccinationService {
  private vaccinationHistorySubject = new BehaviorSubject<Vaccination[] | null>(
    null
  );
  vaccinationHistory$ = this.vaccinationHistorySubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadVaccinationHistory();
  }

  loadVaccinationHistory() {
    const url = `${environment.api}/vaccination`;

    let params = new HttpParams();
    params = params.set("limit", 1);

    this.http
      .get<Vaccination[]>(url, { params })
      .subscribe((vaccinationHistory) =>
        this.vaccinationHistorySubject.next(vaccinationHistory)
      );
  }
}
