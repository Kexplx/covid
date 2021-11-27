import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thousandPoint',
})
export class ThousandPointPipe implements PipeTransform {
  transform(value: number): string {
    if (value < 1000) {
      return value.toString();
    }

    const valueReverted = this.revert(value.toString());

    let result = '';
    for (let i = 0; i < valueReverted.length; i += 3) {
      result += valueReverted.slice(i, i + 3) + '.';
    }

    result = this.revert(result).replace(/^./, '');

    return result;
  }

  revert(s: string) {
    let reverted = '';

    for (let i = s.length - 1; i >= 0; i--) {
      reverted += s[i];
    }

    return reverted;
  }
}
