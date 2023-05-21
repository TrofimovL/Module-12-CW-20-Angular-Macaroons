import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'maxWordCount'
})
export class MaxWordCountPipe implements PipeTransform {

  transform(value: string, maxCount: number): string {

    // if (value.length > maxCount) value = value.slice(0, maxCount) + '...'
    // return value;

    return (value.length > maxCount ? value.slice(0, maxCount) + '...' : value);
  }

}
