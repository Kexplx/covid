import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Vaccination {
  lastUpdated: string;
  numberOfPeopleAtLeastOnceVaccinated: number;
  percentAtLeastOnceVaccinated: number;
  totalNumberOfVaccinations: number;
  bavaria_numberOfPeopleAtLeastOnceVaccinated: number;
  bavaria_percentAtLeastOnceVaccinated: number;
}

@Injectable({
  providedIn: 'root',
})
export class VaccinationService {
  constructor(private http: HttpClient) {}

  getVaccination(): Observable<Vaccination> {
    const url = `${environment.api}/vaccination`;

    const params = new HttpParams({ fromObject: { limit: 1 } });

    return this.http.get<Vaccination[]>(url, { params }).pipe(map(vaccinationHistory => vaccinationHistory[0]));
  }
}
