import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfigurationRoutingModule } from './configuration-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductsFormComponent } from './products/products-form/products-form.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsFormComponent,
    ProductsListComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    ConfigurationRoutingModule,
  ],
  exports: [
    CommonModule,
    SharedModule,
    ConfigurationRoutingModule,
    ProductsComponent,
    ProductsFormComponent,
    ProductsListComponent,
  ],
})
export class ConfigurationModule {}
