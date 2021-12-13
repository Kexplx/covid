import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SubSink } from 'subsink';

@Injectable({
  providedIn: 'root',
})
export class UpdateService {
  private subsink = new SubSink();

  private hasUpdateSubject = new BehaviorSubject<boolean>(false);
  hasUpdate$ = this.hasUpdateSubject.asObservable();

  constructor(private http: HttpClient, @Inject(DOCUMENT) private document: Document) {
    if (environment.production) {
      this.compareLocalShaWithServerSha();
      this.listenToVisibilityChanges();
    }
  }

  private listenToVisibilityChanges() {
    this.subsink.sink = fromEvent(this.document, 'visibilitychange').subscribe(() => {
      if (!this.document.hidden) {
        // App received focus (e.g. from the user clicking on the tab).
        // The event doesn't emit when the app is first loaded, hence the
        // explicit call to `compareLocalShaWithServerSha` in the contructor.
        this.compareLocalShaWithServerSha();
      }
    });
  }

  private compareLocalShaWithServerSha() {
    const responseType = 'text' as any;

    const url = `https://europe-west3-crimeview.cloudfunctions.net/handleGet?url=https://kexplx.github.io/covid/assets/commit-sha.txt`;

    this.http.get<string>(url, { responseType }).subscribe(serverSha => {
      if (serverSha !== environment.localSha) {
        // The local app is outdated.
        // There's a new version available on the server.
        this.hasUpdateSubject.next(true);

        // We can unsubscribe from the `visibilitychange` event because we have
        // already notified our subject that there are changes.
        this.subsink.unsubscribe();
      }
    });
  }
}
