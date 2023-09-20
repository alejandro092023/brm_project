import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsRoutingModule } from './components-routing.module';
import { StoreComponent } from './store/store.component';
import { StoreFormComponent } from './store/store-form/store-form.component';
import { StoreListComponent } from './store/store-list/store-list.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProductsComponent } from './products/products.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductsFormComponent } from './products/products-form/products-form.component';

@NgModule({
  declarations: [
    StoreComponent,
    StoreFormComponent,
    StoreListComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ProductsComponent,
    ProductsListComponent,
    ProductsFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    ComponentsRoutingModule,
  ],
  exports: [
    CommonModule,
    SharedModule,
    ComponentsRoutingModule,
    StoreComponent,
    StoreFormComponent,
    StoreListComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ProductsComponent,
    ProductsListComponent,
    ProductsFormComponent,
  ],
})
export class ComponentsModule {}
