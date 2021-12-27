import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ENVIRONMENT_TOKEN, Environment } from './environment-provider';

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
  constructor(@Inject(ENVIRONMENT_TOKEN) private environment: Environment, private http: HttpClient) {}

  getVaccination(): Observable<Vaccination> {
    const url = `${this.environment.api}/vaccination`;

    const params = new HttpParams({ fromObject: { limit: 1 } });

    return this.http.get<Vaccination[]>(url, { params }).pipe(map(vaccinationHistory => vaccinationHistory[0]));
  }
}
