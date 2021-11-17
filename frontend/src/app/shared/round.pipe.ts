import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "round",
})
export class RoundPipe implements PipeTransform {
  transform(value: number): string {
    const rounded = Math.round(value * 100) / 100;

    return rounded.toString().replace(".", ",");
  }
}
