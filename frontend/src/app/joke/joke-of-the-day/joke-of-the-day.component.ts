import { Component } from "@angular/core";
import { JokeService } from "src/app/joke.service";

@Component({
  selector: "app-joke-of-the-day",
  templateUrl: "./joke-of-the-day.component.html",
  styleUrls: ["./joke-of-the-day.component.css"],
})
export class JokeOfTheDayComponent {
  joke$ = this.jokeService.jokeOfTheDay$;

  constructor(private jokeService: JokeService) {}

  onUpdateClick() {
    this.jokeService.loadJokeOfTheDay();
  }
}
