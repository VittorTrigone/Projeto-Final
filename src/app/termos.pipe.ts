import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'termos'
})
export class TermosPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? 'Concorda' : 'Não Concorda';
  }

}
