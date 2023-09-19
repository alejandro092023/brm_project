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
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    StoreComponent,
    StoreFormComponent,
    StoreListComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
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
  ],
})
export class ComponentsModule {}
