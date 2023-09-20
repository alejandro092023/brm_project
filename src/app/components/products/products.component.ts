import { Component, ViewChild } from '@angular/core';
import { ProductsFormComponent } from './products-form/products-form.component';
import { BaseWrapperDirective } from 'src/app/directives/base-wrapper.directive';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass'],
})
export class ProductsComponent extends BaseWrapperDirective {
  @ViewChild('productForm', { static: false }) form:
    | ProductsFormComponent
    | undefined;
}
