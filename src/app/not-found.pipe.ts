import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notFound'
})
export class NotFoundPipe implements PipeTransform {

  transform(value: any): string {
    if (!value) return '../../assets/not_Found.png';
    else return value;
  }

}
