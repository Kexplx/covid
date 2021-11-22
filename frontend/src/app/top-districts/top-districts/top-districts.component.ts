import { Component, Input } from '@angular/core';
import { District } from 'src/app/district.service';

@Component({
  selector: 'app-top-districts',
  templateUrl: './top-districts.component.html',
  styleUrls: ['./top-districts.component.css'],
})
export class TopDistrictsComponent {
  @Input() topDistricts!: { lastUpdated: string; districts: District[] };
}
