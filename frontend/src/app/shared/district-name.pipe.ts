import { Pipe, PipeTransform } from '@angular/core';
import { District } from '../district.service';

@Pipe({
  name: 'districtName',
})
export class DistrictNamePipe implements PipeTransform {
  transform(district: District): string {
    const suffix = district.type === 'Landkreis' ? ' (LK)' : '';

    return `${district.name}${suffix}`;
  }
}
