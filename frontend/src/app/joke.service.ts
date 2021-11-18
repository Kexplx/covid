import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { environment } from "src/environments/environment";

export interface Joke {
  text: string;
}

@Injectable({
  providedIn: "root",
})
export class JokeService {
  private jokeOfTheDaySubject = new BehaviorSubject<Joke | null>(null);
  jokeOfTheDay$ = this.jokeOfTheDaySubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadJokeOfTheDay();
  }

  loadJokeOfTheDay() {
    this.jokeOfTheDaySubject.next(null);

    const url = `${environment.api}/joke-of-the-day`;

    this.http
      .get<Joke>(url)
      .subscribe((joke) => this.jokeOfTheDaySubject.next(joke));
  }
}
