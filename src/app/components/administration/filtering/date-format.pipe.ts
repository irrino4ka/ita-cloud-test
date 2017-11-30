import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
    name: 'sgDateFormat'
})

export class DateFormatPipe extends DatePipe implements PipeTransform {

    public transform(value): any {
        return super.transform(value, 'MM/dd/y');
    }

}
