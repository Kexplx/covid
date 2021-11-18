import { Component, Input, OnInit } from "@angular/core";
import { Joke } from "src/app/joke.service";

@Component({
  selector: "app-joke-of-the-day",
  templateUrl: "./joke-of-the-day.component.html",
  styleUrls: ["./joke-of-the-day.component.css"],
})
export class JokeOfTheDayComponent implements OnInit {
  @Input() jokeOfTheDay!: Joke;

  backgroundColor = "";
  private colors = [
    "rgba(155, 89, 182, 0.1)",
    "rgba(230, 126, 34, 0.1)",
    "rgba(241, 196, 15, 0.1)",
    "rgba(26, 188, 156, 0.1)",
    "rgba(231, 76, 60, 0.1)",
  ];

  bat = "";
  private bats = [
    "assets/icons/bat-1.png",
    "assets/icons/bat-2.png",
    "assets/icons/bat-3.png",
    "assets/icons/bat-4.png",
    "assets/icons/bat-5.png",
    "assets/icons/bat-6.png",
  ];

  ngOnInit() {
    const colorIndex = Math.floor(Math.random() * this.colors.length);
    this.backgroundColor = this.colors[colorIndex];

    const batIndex = Math.floor(Math.random() * this.bats.length);
    this.bat = this.bats[batIndex];
  }
}
