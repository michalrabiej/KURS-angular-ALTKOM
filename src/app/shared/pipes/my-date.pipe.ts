import { formatDate } from '@angular/common';
import { ElementSchemaRegistry } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myDate'
})
export class MyDatePipe implements PipeTransform {

  transform(value: unknown): unknown {
    if (!Date.parse(value as string)){
      return value;
    };
    if (typeof value === 'string'){
      const date = new Date(value);
      return date.toLocaleDateString('pl', {
        month: 'long',
        year: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
    }
    return value;
  }
}
