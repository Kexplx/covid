import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";
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
  constructor(private http: HttpClient) {}

  getVaccination(): Observable<Vaccination> {
    const url = `${environment.api}/vaccination`;

    let params = new HttpParams();
    params = params.set("limit", 1);

    return this.http
      .get<Vaccination[]>(url, { params })
      .pipe(map((vaccinationHistory) => vaccinationHistory[0]));
  }
}