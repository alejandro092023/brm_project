import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BaseFormDirective } from 'src/app/directives/base-form.directive';
import { BrmService } from 'src/app/services/brm.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent extends BaseFormDirective {
  constructor(
    brmService: BrmService,
    toastr: ToastrService,
    fb: FormBuilder,
    public router: Router
  ) {
    super(brmService, toastr, fb);
  }

  override setSubmitMetods() {
    this.postService = this.brmService.login(this.form.value);
    super.setSubmitMetods();
  }

  override validForm() {
    this.form = this.fb.group({
      name_: ['', [Validators.required, Validators.minLength(5)]],
      password_: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  get invalidName() {
    return this.form.get('name_')?.invalid && this.form.get('name_')?.touched;
  }
  get invalidPassword() {
    return (
      this.form.get('password_')?.invalid && this.form.get('password_')?.touched
    );
  }

  override formOperation() {
    this.postService.subscribe(
      (next) => {
        this.cleanForm();
        localStorage.setItem('token', next.token);
        this.token.emit(localStorage.getItem('token'));
      },
      (error) => {
        this.toastr.error('Nombre y/o contraseña incorrectos', 'Error');
        console.log(error);
      }
    );
  }

  override cleanForm() {
    this.form.reset();
    this.statusFormEmit.emit({
      create: 1,
      list: 0,
      edit: 0,
      editId: 0,
      delete: 0,
    });
    this.router.navigate(['/config/product']);
  }
}
