import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

export enum StateNames {
  Bavaria = "Bayern",
}

export interface State {
  name: string;
  population: number;
  totalCases: number;
  lastUpdated: number;
  casesInLast7Days: number;
  totalDeaths: number;
  incidence: number;
}

@Injectable({
  providedIn: "root",
})
export class StateService {
  constructor(private http: HttpClient) {}

  getStateHistory(name: StateNames): Observable<State[]> {
    const url = `${environment.api}/states`;

    let params = new HttpParams();
    params = params.set("name", name);
    params = params.set("limit", 1);

    return this.http.get<State[]>(url, { params });
  }
}
