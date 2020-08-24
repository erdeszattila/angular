import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {
  transform(value: any, filterString: string): any {
    const resultArray =  [];
    if (value.length === 0 || filterString === '') {
      return value;
    }
    for (const item of value) {
      if (item.name.includes(filterString)) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
