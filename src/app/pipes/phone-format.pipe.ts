import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {

  transform(value: string): string {
    return `+${value.slice(0,1)} (${value.slice(1,4)}) ${value.slice(4,7)}-${value.slice(7,9)}-${value.slice(9,12)}`
  }

}
