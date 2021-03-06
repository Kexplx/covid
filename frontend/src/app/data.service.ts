import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, delay, forkJoin } from 'rxjs';
import { District, DistrictService } from './district.service';
import { Germany, GermanyService } from './germany.service';
import { Joke, JokeService } from './joke.service';
import { State, StateNames, StateService } from './state.service';
import { Vaccination, VaccinationService } from './vaccination.service';
import { HttpClient } from '@angular/common/http';
import { FingerprintDocument, FingerprintService } from './fingerprint.service';
import { ENVIRONMENT_TOKEN, Environment } from './environment-provider';
import { Announcement, AnnouncementService } from './announcement.service';

export interface AppData {
  lastUpdated: string;
  vaccination: Vaccination;
  germanyHistory: Germany[];
  bavariaHistory: State[];
  listOfDistrictHistories: District[][];
  jokeOfTheDay: Joke;
  topDistricts: { lastUpdated: string; districts: District[] };
  fingerprintDocuments: FingerprintDocument[];
  fingerPrintDocumentWithMaxFingerprints: FingerprintDocument;
  announcements: Announcement[];
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataSubject = new BehaviorSubject<AppData | null>(null);
  data$ = this.dataSubject.asObservable();

  constructor(
    @Inject(ENVIRONMENT_TOKEN) private environment: Environment,
    private http: HttpClient,
    private districtService: DistrictService,
    private stateService: StateService,
    private vaccinationService: VaccinationService,
    private germanyService: GermanyService,
    private jokeService: JokeService,
    private fingerprintService: FingerprintService,
    private announcementService: AnnouncementService,
  ) {}

  loadData() {
    this.dataSubject.next(null);

    if (this.environment.production) {
      this.loadProductionData();
    } else {
      this.loadProductionData();

      // this.loadDummyData();
    }
  }

  private loadProductionData() {
    const responses = [
      this.districtService.getListOfDistrictHistories(),
      this.germanyService.getGermanyHistory(),
      this.vaccinationService.getVaccination(),
      this.stateService.getStateHistory(StateNames.Bavaria),
      this.jokeService.getJokeOfTheDay(),
      this.districtService.getTopDistricts(),
      this.fingerprintService.getFingerprintDocuments(),
      this.fingerprintService.getFingerPrintDocumentWithMaxFingerprints(),
      this.announcementService.getAnnouncements(),

      // This observable emits `void` and will show up
      // as `null` in the forkJoin response below.
      this.fingerprintService.sendFingerpint(),
    ];

    forkJoin(responses).subscribe(res => {
      const appData: AppData = {
        lastUpdated: (res[1] as Germany[])[0].lastUpdated,
        listOfDistrictHistories: res[0] as District[][],
        germanyHistory: res[1] as Germany[],
        vaccination: res[2] as Vaccination,
        bavariaHistory: res[3] as State[],
        jokeOfTheDay: res[4] as Joke,
        topDistricts: res[5] as { lastUpdated: string; districts: District[] },
        fingerprintDocuments: res[6] as FingerprintDocument[],
        fingerPrintDocumentWithMaxFingerprints: res[7] as FingerprintDocument,
        announcements: res[8] as Announcement[],
      };

      this.dataSubject.next(appData);
    });
  }

  private loadDummyData() {
    this.http
      .get<AppData>('/assets/data.json')
      .pipe(delay(500)) // Wait 500ms to simulate network.
      .subscribe(d => this.dataSubject.next({ ...d, lastUpdated: new Date().toISOString() }));
  }

  loadLaterHistories(n: number) {
    const oldState = this.dataSubject.value!;
    this.dataSubject.next(null);

    combineLatest([
      this.districtService.getListOfDistrictHistories(n),
      this.germanyService.getGermanyHistory(n),
    ]).subscribe(data => {
      this.dataSubject.next({ ...oldState, listOfDistrictHistories: data[0], germanyHistory: data[1] });
    });
  }
}
