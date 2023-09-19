import { Component, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { BaseWrapperDirective } from 'src/app/directives/base-wrapper.directive';
import { RegisterComponent } from './register/register.component';
import { BaseListDirective } from 'src/app/directives/base-list.directive';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass'],
})
export class AuthComponent extends BaseWrapperDirective {
  @ViewChild('registerForm', { static: false }) form:
    | RegisterComponent
    | undefined;
}
