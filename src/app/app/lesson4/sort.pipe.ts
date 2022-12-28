import { Pipe, PipeTransform } from '@angular/core';
import { phoneList } from './lesson4.component';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: phoneList[], sort: boolean): any {
    if(sort){
       return value.sort((a,b)=>{
        if(a.firstName.length>b.firstName.length){
          return 1;
        }
        if(a.firstName.length<b.firstName.length){
          return -1;
        }
        return 0;
      })
    }
    return value.sort((a,b)=>{
      if(a.firstName.length<b.firstName.length){
        return 1
      }
      if(a.firstName.length>b.firstName.length){
        return -1
      }
      return 0;
    })
  }

}
