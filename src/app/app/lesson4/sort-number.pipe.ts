import { Pipe, PipeTransform } from '@angular/core';
import { phoneList } from './lesson4.component';

@Pipe({
  name: 'sortNumber'
})
export class SortNumberPipe implements PipeTransform {

  transform(value: phoneList[], sort: boolean): any {
    if(sort){
       return value.sort((a,b)=>{
        if(a.number>b.number){
          return 1;
        }
        if(a.number<b.number){
          return -1;
        }
        return 0;
      })
    }
    return value.sort((a,b)=>{
      if(a.number<b.number){
        return 1
      }
      if(a.number>b.number){
        return -1
      }
      return 0;
    })
  }

}
