import { Pipe, PipeTransform } from '@angular/core';
import { District } from 'src/app/district.service';

@Pipe({
  name: 'districts',
})
export class DistrictsPipe implements PipeTransform {
  transform(listOfDistrictHistories: District[][]): District[] {
    return listOfDistrictHistories.map(districtHistory => districtHistory[0]);
  }
}
