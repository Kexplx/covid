import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { nanoid } from 'nanoid';
import { Observable } from 'rxjs';
import { ENVIRONMENT_TOKEN, Environment } from './environment-provider';

export interface FingerprintDocument {
  created: string;
  fingerprints: string[];
  fingerprintCount: number;
}

const FINGERPRINT_KEY = 'inzidenz-app-fingerprint';

@Injectable({
  providedIn: 'root',
})
export class FingerprintService {
  private fingerprint = this.getFingerprintFromLocalStorage();

  constructor(private http: HttpClient, @Inject(ENVIRONMENT_TOKEN) private environment: Environment) {}

  getFingerprintDocuments(): Observable<FingerprintDocument[]> {
    const url = `${this.environment.api}/fingerprints`;

    const params = new HttpParams({ fromObject: { limit: 8, fingerprint: this.fingerprint } });

    return this.http.get<FingerprintDocument[]>(url, { params });
  }

  getFingerPrintDocumentWithMaxFingerprints(): Observable<FingerprintDocument> {
    const url = `${this.environment.api}/fingerprints/max`;

    return this.http.get<FingerprintDocument>(url);
  }

  sendFingerpint(): Observable<void> {
    const url = `${this.environment.api}/fingerprints`;

    return this.http.post<void>(url, { fingerprint: this.fingerprint });
  }

  private getFingerprintFromLocalStorage(): string {
    let fingerprint = localStorage.getItem(FINGERPRINT_KEY);

    if (!fingerprint) {
      fingerprint = nanoid();
      localStorage.setItem(FINGERPRINT_KEY, fingerprint);
    }

    return fingerprint;
  }
}
