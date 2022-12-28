import { Pipe, PipeTransform } from '@angular/core';
import { phoneList } from './lesson4.component';

@Pipe({
  name: 'sortLastName'
})
export class SortLastNamePipe implements PipeTransform {

  transform(value: phoneList[], sort: boolean,): any {
    if(sort){
       return value.sort((a,b)=>{
        if(a.lastName.length>b.lastName.length){
          return 1;
        }
        if(a.lastName.length<b.lastName.length){
          return -1;
        }
        return 0;
      })
    }
    return value.sort((a,b)=>{
      if(a.lastName.length<b.lastName.length){
        return 1
      }
      if(a.lastName.length>b.lastName.length){
        return -1
      }
      return 0;
    })
  }

}
