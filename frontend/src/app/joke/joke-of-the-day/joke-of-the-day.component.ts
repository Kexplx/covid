import { Component, Input } from "@angular/core";
import { Joke } from "src/app/joke.service";

@Component({
  selector: "app-joke-of-the-day",
  templateUrl: "./joke-of-the-day.component.html",
  styleUrls: ["./joke-of-the-day.component.css"],
})
export class JokeOfTheDayComponent {
  @Input() jokeOfTheDay!: Joke;
}
