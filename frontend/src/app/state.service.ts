import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
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
  private stateHistorySubjects: Map<string, BehaviorSubject<State[] | null>> =
    new Map();

  get bavariaHistory$() {
    return this.stateHistorySubjects.get(StateNames.Bavaria)!.asObservable();
  }

  constructor(private http: HttpClient) {
    this.stateHistorySubjects.set(
      StateNames.Bavaria,
      new BehaviorSubject<State[] | null>(null)
    );

    this.loadStateHistory(StateNames.Bavaria);
  }

  loadStateHistory(name: StateNames): void {
    const stateSubject = this.stateHistorySubjects.get(name);

    if (!stateSubject) {
      throw new Error(`State subject for "${name}" needs to be initialized.`);
    }

    stateSubject.next(null);

    const url = `${environment.api}/states`;

    let params = new HttpParams();
    params = params.set("name", name);
    params = params.set("limit", 2);

    this.http.get<State[]>(url, { params }).subscribe((stateHistory) => {
      stateSubject.next(stateHistory);
    });
  }
}
