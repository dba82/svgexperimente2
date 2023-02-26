import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  range(max:number,min = 0,step = 1):number[]{
    const result = [];
    for (let i = min; i<=max; i += step){
      result.push(i);
    }
    return result;
  }
}
