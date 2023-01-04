
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
@Pipe({
  name: 'myCustomPipe'
})
export class DateFormatPipePipe implements PipeTransform {
    transform(value: string) {
       var datePipe = new DatePipe("en-US");
        value = datePipe.transform(value, 'dd MMMM, yyyy (hh:mm a)');
        return value;
    }
}
