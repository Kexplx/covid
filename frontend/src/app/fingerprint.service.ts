import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { nanoid } from 'nanoid';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface FingerprintDocument {
  created: string;
  fingerprints?: string[];
  fingerprintCount: number;
}

const FINGERPRINT_KEY = 'inzidenz-app-fingerprint';

@Injectable({
  providedIn: 'root',
})
export class FingerprintService {
  constructor(private http: HttpClient) {}

  getFingerprintDocuments(): Observable<FingerprintDocument[]> {
    const url = `${environment.api}/fingerprints`;

    const params = new HttpParams({ fromObject: { limit: 8 } });

    return this.http.get<FingerprintDocument[]>(url, { params }).pipe(
      map(docs => {
        // If this was the first request of the user (for the current day),
        // the server will not have counted their visit yet.
        // We therefore add it to the result here.
        const todaysDoc = docs[0];

        if (todaysDoc.fingerprintCount === 0) {
          todaysDoc.fingerprintCount++;
        }

        return docs;
      }),
    );
  }

  getFingerPrintDocumentWithMaxFingerprints(): Observable<FingerprintDocument> {
    const url = `${environment.api}/fingerprints/max`;

    return this.http.get<FingerprintDocument>(url);
  }

  sendFingerpint(): Observable<void> {
    const url = `${environment.api}/fingerprints`;

    const fingerprint = this.getFingerprintFromLocalStorage();

    return this.http.post<void>(url, { fingerprint });
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
