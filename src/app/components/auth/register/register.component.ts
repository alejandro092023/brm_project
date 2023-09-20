import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BaseFormDirective } from 'src/app/directives/base-form.directive';
import { BrmService } from 'src/app/services/brm.service';
import { UtilsModule } from '../../../shared/utils/utils.module';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
})
export class RegisterComponent extends BaseFormDirective {
  constructor(
    brmService: BrmService,
    toastr: ToastrService,
    utils: UtilsModule,
    fb: FormBuilder
  ) {
    super(brmService, toastr, utils, fb);
  }

  override setSubmitMetods() {
    this.postService = this.brmService.register(this.form.value);
    super.setSubmitMetods();
  }

  override validForm() {
    this.form = this.fb.group({
      name_: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.minLength(15)]],
      password_: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  get invalidName() {
    return this.form.get('name_')?.invalid && this.form.get('name_')?.touched;
  }
  get invalidEmail() {
    return this.form.get('email')?.invalid && this.form.get('email')?.touched;
  }
  get invalidPassword() {
    return (
      this.form.get('password_')?.invalid && this.form.get('password_')?.touched
    );
  }

  override formOperation() {
    this.toastr.success('Datos guardados exitosamente', 'Datos guardados');
    this.postService.subscribe((response) => {
      this.cleanForm();
    });
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
  }
}
