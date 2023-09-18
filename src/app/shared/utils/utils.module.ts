import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [DatePipe],
})
export class UtilsModule {
  constructor(protected datePipe: DatePipe) {}

  dateToFormat(date: string = '') {
    const dateObject = new Date(date);
    return this.datePipe.transform(dateObject, 'dd MMM yyyy');
  }
}
