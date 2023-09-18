import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ComponentsModule } from './components/components.module';
import { BaseFormDirective } from './directives/base-form.directive';
import { BaseListDirective } from './directives/base-list.directive';
import { BaseWrapperDirective } from './directives/base-wrapper.directive';
import { ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UtilsModule } from './shared/utils/utils.module';
import { AddTokenInterceptor } from './shared/utils/add-token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    BaseFormDirective,
    BaseListDirective,
    BaseWrapperDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    UtilsModule,
    ToastrModule.forRoot(),
  ],
  exports: [SharedModule],
  bootstrap: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true },
  ],
})
export class AppModule {}
