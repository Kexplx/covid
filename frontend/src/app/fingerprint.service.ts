import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface FingerprintDocument {
  created: string;
  fingerprints: string[];
}

@Injectable({
  providedIn: 'root',
})
export class FingerprintService {
  constructor(private http: HttpClient) {}

  getFingerprintDocuments(): Observable<FingerprintDocument[]> {
    const url = `${environment.api}/fingerprints`;

    const params = new HttpParams({ fromObject: { limit: 7 } });

    return this.http.get<FingerprintDocument[]>(url, { params });
  }
}
