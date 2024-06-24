import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';

@Pipe({
  name: 'customDate',
  standalone: true
})
export class CustomDatePipe implements PipeTransform {
  transform(value: Date | string, dateFormat: string = 'dd/MM/yyyy HH:mm'): string {
    if (!value) return '';
    return format(new Date(value), dateFormat);
  }
}