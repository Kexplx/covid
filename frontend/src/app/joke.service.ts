import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ENVIRONMENT_TOKEN, Environment } from './environment-provider';

export interface Joke {
  text: string;
}

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  constructor(private http: HttpClient, @Inject(ENVIRONMENT_TOKEN) private environment: Environment) {}

  getJokeOfTheDay() {
    const url = `${this.environment.api}/joke-of-the-day`;

    return this.http.get<Joke>(url);
  }
}
