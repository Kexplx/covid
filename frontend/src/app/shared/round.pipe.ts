import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'round',
})
export class RoundPipe implements PipeTransform {
  transform(value: number, decimalPoints = 0): string {
    const multiplyer = Math.pow(10, decimalPoints);

    const rounded = Math.round(value * multiplyer) / multiplyer;

    return rounded.toString().replace('.', ',');
  }
}
