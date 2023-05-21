import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'currencyPipe'
})
export class CurrencyPipePipe implements PipeTransform {

  transform(value: string | number): string {


    if (typeof value === "number") {
      if (value === 0){
        return '0.00 руб.'
      }
      value = value.toString()
    }

    value = value.replace(',', '.');

    let afterComma: string = value.split('.')[1];
    if (afterComma.length === 1) {
      return value + '0 руб.'
    } else {
      return value + ' руб.'
    }
  }

}
