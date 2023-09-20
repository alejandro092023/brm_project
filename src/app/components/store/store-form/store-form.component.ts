import { Component, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BaseFormDirective } from 'src/app/directives/base-form.directive';
import { BrmService } from 'src/app/services/brm.service';
import { UtilsModule } from 'src/app/shared/utils/utils.module';

@Component({
  selector: 'app-store-form',
  templateUrl: './store-form.component.html',
  styleUrls: ['./store-form.component.sass'],
})
export class StoreFormComponent extends BaseFormDirective {
  products: any[] = [];
  formProducts: FormGroup[] = [];
  formConverted: any = { items: [] };

  constructor(
    brmService: BrmService,
    utils: UtilsModule,
    toastr: ToastrService,
    fb: FormBuilder
  ) {
    super(brmService, toastr, utils, fb);
    this.brmService.products().subscribe((data) => this.handleProducts(data));
    this.globalValue = JSON.parse(localStorage.getItem('globalVariable') || '');
  }

  override ngOnChanges(changes: SimpleChanges): void {
    if (this.statusForm.create) {
      this.brmService.products().subscribe((data) => this.handleProducts(data));
    }
  }

  override setSubmitMetods() {
    this.postService = this.brmService.shoppingPost(this.formConverted);
    super.setSubmitMetods();
  }
  override formOperation() {
    this.formConverted.items = this.formProducts
      .filter((form) => form.value.quantity)
      .map((form) => {
        delete form.value.name_;
        return form.value;
      });
    this.postService.subscribe((response) => {
      this.cleanForm();
    });
    this.toastr.success('Datos guardados exitosamente', 'Datos guardados');
  }

  handleProducts(data: any[] = []) {
    this.products = data;
    this.validFormByProducts();
  }

  validFormByProducts() {
    this.formProducts = this.products.map((item) => {
      return this.fb.group({
        name_: [item.name_],
        user_id: [this.globalValue.user_id],
        product_id: [item.product_id],
        quantity: [0],
        date_shopping: [this.utils.dateFormattedString(new Date())],
      });
    });
  }

  override cleanForm() {
    this.formProducts.map((form) => form.reset());
    this.statusFormEmit.emit({
      create: 0,
      list: 1,
      edit: 0,
      editId: 0,
      delete: 0,
    });
  }
}
