import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface District {
  code: number;
  name: string;
  lastUpdated: string;
  incidence: number;
  type: string;
  state: string;
  totalCases: number;
  totalDeaths: number;
}

const districtCodes = [
  9362, // Regensburg
  9562, // Erlangen
  9162, // München
  9564, // Nürnberg
  9179, // Fürstenfeldbruck (LK)
  9372, // Cham (LK)
  9278, // Straubing-Bogen (LK)
  9663, // Würzburg
  11007, // Berlin Tempelhof-Schöneberg (Bezirk)
  14713, // Leipzig
];

const districtCodesQuery = districtCodes.reduce((acc, curr) => (acc += curr.toString() + ','), '').replace(/,$/, '');

@Injectable({
  providedIn: 'root',
})
export class DistrictService {
  constructor(private http: HttpClient) {}

  getListOfDistrictHistories(): Observable<District[][]> {
    const url = `${environment.api}/districts`;

    let params = new HttpParams();
    params = params.set('limit', 8);
    params = params.set('codes', districtCodesQuery);

    return this.http.get<District[][]>(url, { params });
  }
}
