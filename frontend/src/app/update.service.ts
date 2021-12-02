import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent, Subscription, timer } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UpdateService {
  private visibilitySubscription?: Subscription;

  private hasUpdateSubject = new BehaviorSubject<boolean>(false);
  hasUpdate$ = this.hasUpdateSubject.asObservable();

  constructor(private http: HttpClient, @Inject(DOCUMENT) private document: Document) {
    if (environment.production) {
      timer(5000).subscribe(() => {
        this.compareLocalShaWithServerSha();
        this.listenToVisibilityChanges();
      });
    }
  }

  private listenToVisibilityChanges() {
    this.visibilitySubscription = fromEvent(this.document, 'visibilitychange').subscribe(() => {
      if (!this.document.hidden) {
        // User tabbed into the app.
        this.compareLocalShaWithServerSha();
      }
    });
  }

  private compareLocalShaWithServerSha() {
    const responseType = 'text' as any;

    this.http
      .get<string>('https://kexplx.github.io/covid/assets/commit-sha.txt', { responseType })
      .subscribe(serverSha => {
        if (serverSha !== environment.localSha) {
          // The local app is outdated.
          // There's a new version available on the server.
          this.hasUpdateSubject.next(true);

          // We can unsubscribe from the event because we have
          // already notified our subject that there are changes.
          this.visibilitySubscription?.unsubscribe();
        }
      });
  }
}
