import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, forkJoin } from 'rxjs';
import { District, DistrictService } from './district.service';
import { Germany, GermanyService } from './germany.service';
import { Joke, JokeService } from './joke.service';
import { State, StateNames, StateService } from './state.service';
import { Vaccination, VaccinationService } from './vaccination.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

export interface AppData {
  vaccination: Vaccination;
  germanyHistory: Germany[];
  bavariaHistory: State[];
  listOfDistrictHistories: District[][];
  jokeOfTheDay: Joke;
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
    ];

    forkJoin(responses).subscribe(data => {
      this.dataSubject.next({
        listOfDistrictHistories: data[0] as District[][],
        germanyHistory: data[1] as Germany[],
        vaccination: data[2] as Vaccination,
        bavariaHistory: data[3] as State[],
        jokeOfTheDay: data[4] as Joke,
      });
    });
  }

  private loadDummyData() {
    // Wait 500ms to simulate network.
    this.http
      .get<AppData>('/assets/data.json')
      .pipe(delay(500))
      .subscribe(d => this.dataSubject.next(d));
  }
}
