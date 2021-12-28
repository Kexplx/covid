import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'districtType',
})
export class DistrictTypePipe implements PipeTransform {
  transform(districtType: string): string {
    const type = districtType === 'Landkreis' ? ' (LK)' : '';

    return type;
  }
}
