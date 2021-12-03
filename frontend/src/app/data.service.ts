import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, forkJoin } from 'rxjs';
import { District, DistrictService } from './district.service';
import { Germany, GermanyService } from './germany.service';
import { Joke, JokeService } from './joke.service';
import { State, StateNames, StateService } from './state.service';
import { Vaccination, VaccinationService } from './vaccination.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { FingerprintDocument, FingerprintService } from './fingerprint.service';

export interface AppData {
  lastUpdated: string;
  vaccination: Vaccination;
  germanyHistory: Germany[];
  bavariaHistory: State[];
  listOfDistrictHistories: District[][];
  jokeOfTheDay: Joke;
  topDistricts: { lastUpdated: string; districts: District[] };
  fingerprintDocuments: FingerprintDocument[];
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataSubject = new BehaviorSubject<AppData | null>(null);
  data$ = this.dataSubject.asObservable();

  constructor(
    private http: HttpClient,
    private districtService: DistrictService,
    private stateService: StateService,
    private vaccinationService: VaccinationService,
    private germanyService: GermanyService,
    private jokeService: JokeService,
    private fingerprintService: FingerprintService,
  ) {
    this.loadData();
  }

  loadData() {
    this.dataSubject.next(null);

    if (environment.production) {
      this.loadProductionData();
    } else {
      this.loadDummyData();
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
    ];

    forkJoin(responses).subscribe(data =>
      this.dataSubject.next({
        lastUpdated: (data[1] as Germany[])[0].lastUpdated,
        listOfDistrictHistories: data[0] as District[][],
        germanyHistory: data[1] as Germany[],
        vaccination: data[2] as Vaccination,
        bavariaHistory: data[3] as State[],
        jokeOfTheDay: data[4] as Joke,
        topDistricts: data[5] as { lastUpdated: string; districts: District[] },
        fingerprintDocuments: data[6] as FingerprintDocument[],
      }),
    );
  }

  private loadDummyData() {
    this.http
      .get<AppData>('/assets/data.json')
      .pipe(delay(500)) // Wait 500ms to simulate network.
      .subscribe(d => this.dataSubject.next({ ...d, lastUpdated: new Date().toISOString() }));
  }
}
