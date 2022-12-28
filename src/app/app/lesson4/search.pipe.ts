import { Pipe, PipeTransform } from '@angular/core';
import { phoneList } from './lesson4.component';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: phoneList[], text: any): any {
    if(!text){
      return value;
    }
    return value.filter(find=>
      find.firstName.toLowerCase().includes(text.toLowerCase()) ||
      find.lastName.toLowerCase().includes(text.toLowerCase()) ||
      find.number.includes(text)
    )
  }

}
