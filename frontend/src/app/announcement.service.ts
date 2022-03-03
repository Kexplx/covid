import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Announcement {
  id: string;
  relevantUntil: string;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class AnnouncementService {
  constructor(private http: HttpClient) {}

  getAnnouncements(): Observable<Announcement[]> {
    const url = `${environment.api}/announcements`;

    return this.http.get<Announcement[]>(url);
  }
}
