import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ENVIRONMENT_TOKEN, Environment } from './environment-provider';

export interface Germany {
  lastUpdated: string;
  incidence: number;
  totalCases: number;
  totalDeaths: number;
  hospitalizationIncidence: number;
  newCases: number;
}

@Injectable({
  providedIn: 'root',
})
export class GermanyService {
  constructor(private http: HttpClient, @Inject(ENVIRONMENT_TOKEN) private environment: Environment) {}

  getGermanyHistory(limit = 8): Observable<Germany[]> {
    const url = `${this.environment.api}/germany`;

    let params = new HttpParams();
    params = params.set('limit', limit);

    return this.http.get<Germany[]>(url, { params });
  }
}
