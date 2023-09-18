import { Component, ViewChild } from '@angular/core';
import { BaseWrapperDirective } from 'src/app/directives/base-wrapper.directive';
import { StoreFormComponent } from './store-form/store-form.component';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.sass'],
})
export class StoreComponent extends BaseWrapperDirective {
  @ViewChild('productForm', { static: false }) form:
    | StoreFormComponent
    | undefined;
}
