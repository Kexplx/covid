import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Joke } from 'src/app/joke.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-joke-of-the-day',
  templateUrl: './joke-of-the-day.component.html',
  styleUrls: ['./joke-of-the-day.component.css'],
})
export class JokeOfTheDayComponent {
  jokeOfTheDay$: Observable<Joke | undefined> = this.dataService.data$.pipe(map(d => d?.jokeOfTheDay));

  constructor(private dataService: DataService) {}
}
