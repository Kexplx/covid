import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

export interface Joke {
  text: string;
}

@Injectable({
  providedIn: "root",
})
export class JokeService {
  constructor(private http: HttpClient) {}

  getJokeOfTheDay() {
    const url = `${environment.api}/joke-of-the-day`;

    return this.http.get<Joke>(url);
  }
}
