import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, tap } from "rxjs";
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
  private germanyHistorySubject = new BehaviorSubject<Germany[] | null>(null);
  germanyHistory$ = this.germanyHistorySubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadGermany();
  }

  loadGermany(): void {
    this.germanyHistorySubject.next(null);

    const url = `${environment.api}/germany`;

    let params = new HttpParams();
    params = params.set("limit", 1);

    this.http
      .get<Germany[]>(url, { params })
      .subscribe((germanyHistory) =>
        this.germanyHistorySubject.next(germanyHistory)
      );
  }
}
