import { Component, Input } from '@angular/core';
import { District } from 'src/app/district.service';

@Component({
  selector: 'app-top-districts-list',
  templateUrl: './top-districts-list.component.html',
  styleUrls: ['./top-districts-list.component.css'],
})
export class TopDistrictsListComponent {
  @Input() topDistricts!: { lastUpdated: string; districts: District[] };
}
