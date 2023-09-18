import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { BaseFormDirective } from 'src/app/directives/base-form.directive';
import { BrmService } from 'src/app/services/brm.service';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.sass'],
})
export class ProductsFormComponent extends BaseFormDirective {
  constructor(brmService: BrmService, toastr: ToastrService, fb: FormBuilder) {
    super(brmService, toastr, fb);
  }

  override setSubmitMetods() {
    this.postService = this.brmService.productPost(this.form.value);
    this.getItemService = this.brmService.product(this.statusForm.editId);
    super.setSubmitMetods();
  }

  override validForm() {
    this.form = this.fb.group({
      name_: ['', [Validators.required, Validators.minLength(3)]],
      set_: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.minLength(1)]],
      stock: ['', [Validators.required, Validators.minLength(1)]],
      join_date: ['', Validators.required],
    });
  }

  get invalidName() {
    return this.form.get('name_')?.invalid && this.form.get('name_')?.touched;
  }
  get invalidSet() {
    return this.form.get('set_')?.invalid && this.form.get('set_')?.touched;
  }
  get invalidPrice() {
    return this.form.get('price')?.invalid && this.form.get('price')?.touched;
  }
  get invalidStock() {
    return this.form.get('stock')?.invalid && this.form.get('stock')?.touched;
  }
  get invalidDate() {
    return (
      this.form.get('join_date')?.invalid && this.form.get('join_date')?.touched
    );
  }
}
