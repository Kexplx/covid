import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

export interface Germany {
  lastUpdated: string;
  incidence: number;
  totalCases: number;
  totalDeaths: number;
}

@Injectable({
  providedIn: "root",
})
export class GermanyService {
  constructor(private http: HttpClient) {}

  getGermanyHistory(): Observable<Germany[]> {
    const url = `${environment.api}/germany`;

    let params = new HttpParams();
    params = params.set("limit", 1);

    return this.http.get<Germany[]>(url, { params });
  }
}
