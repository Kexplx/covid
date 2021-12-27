import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ENVIRONMENT_TOKEN, Environment } from './environment-provider';

export enum StateNames {
  Bavaria = 'Bayern',
}

export interface State {
  name: string;
  population: number;
  totalCases: number;
  lastUpdated: number;
  casesInLast7Days: number;
  totalDeaths: number;
  incidence: number;
  hospitalizationIncidence: number;
}

@Injectable({
  providedIn: 'root',
})
export class StateService {
  constructor(private http: HttpClient, @Inject(ENVIRONMENT_TOKEN) private environment: Environment) {}

  getStateHistory(name: StateNames): Observable<State[]> {
    const url = `${this.environment.api}/states`;

    let params = new HttpParams();
    params = params.set('name', name);
    params = params.set('limit', 8);

    return this.http.get<State[]>(url, { params });
  }
}
