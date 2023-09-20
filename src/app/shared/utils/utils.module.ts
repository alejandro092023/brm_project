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

  dateFormattedString(date: any) {
    date = '2023-10-23';

    const dateFormattedString = this.datePipe.transform(date, 'yyyy-MM-dd');
    return dateFormattedString;
  }

  getFullPrice(products: any) {
    let fullPrice = 0;
    products.map((product: any) => {
      product.fullPriceByProduct =
        product['product']['price'] * product['quantity'];
      return (fullPrice += product.fullPriceByProduct);
    });
    return fullPrice;
  }
}
