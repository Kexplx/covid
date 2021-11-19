import { Component, Input, OnInit } from '@angular/core';
import { Joke } from 'src/app/joke.service';
import { GermanDatePipe } from 'src/app/shared/german-date.pipe';

@Component({
  selector: 'app-joke-of-the-day',
  templateUrl: './joke-of-the-day.component.html',
  styleUrls: ['./joke-of-the-day.component.css'],
})
export class JokeOfTheDayComponent implements OnInit {
  @Input() jokeOfTheDay!: Joke;
  date: string = '';

  constructor(private germandate: GermanDatePipe) {}

  ngOnInit() {
    this.date = this.germandate.transform(new Date());
  }
}
