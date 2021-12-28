import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ENVIRONMENT_TOKEN, Environment } from './environment-provider';
import { SettingsService } from './settings.service';
import { DistrictPreview } from './settings/settings-form/district-auto-complete/district-auto-complete.component';

export interface District {
  code: number;
  name: string;
  lastUpdated: string;
  incidence: number;
  type: string;
  state: string;
  totalCases: number;
  population?: number;
  totalDeaths: number;
}

@Injectable({
  providedIn: 'root',
})
export class DistrictService {
  constructor(
    private http: HttpClient,
    @Inject(ENVIRONMENT_TOKEN) private environment: Environment,
    private settingsService: SettingsService,
  ) {}

  getListOfDistrictHistories(): Observable<District[][]> {
    const url = `${this.environment.api}/districts`;

    let params = new HttpParams();
    params = params.set('limit', 8);
    params = params.set('codes', this.createDistrictQuery(this.settingsService.settings.districts));

    return this.http.get<District[][]>(url, { params });
  }

  getTopDistricts(): Observable<{ lastUpdated: string; districts: District[] }> {
    const url = `${this.environment.api}/top-districts`;

    const params = new HttpParams({ fromObject: { limit: 10 } });

    return this.http.get<{ lastUpdated: string; districts: District[] }>(url, { params });
  }

  private createDistrictQuery(districtPreviews: DistrictPreview[]) {
    return districtPreviews
      .map(d => d.code)
      .reduce((acc, curr) => (acc += curr.toString() + ','), '')
      .replace(/,$/, '');
  }
}
