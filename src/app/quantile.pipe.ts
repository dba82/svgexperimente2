import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quantile'
})
export class QuantilePipe implements PipeTransform {

  transform(value: number[], percentage: number): number {
    const index = ( value.length - 1 ) * percentage/100; 
    const items = [ ...value ].sort();
    if ( !Number.isInteger(index) ){
      return (items[ Math.floor(index)] + items[Math.floor(index) + 1])* 0.5;
    }
    return items[index];
  }

}
