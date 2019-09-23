import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchproduct'
})
export class SearchproductPipe implements PipeTransform {

  transform(value: any,search:string): any {
   return value.filter(x=>x.name.startsWith(search));
  }

}
