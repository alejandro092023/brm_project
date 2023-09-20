import {
  Directive,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ChangeDetectorRef,
} from '@angular/core';
import { Observable } from 'rxjs';
import { BrmService } from '../services/brm.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup } from '@angular/forms';

@Directive({
  selector: '[appBaseForm]',
})
export class BaseFormDirective implements OnChanges {
  postService: Observable<any>;
  putService: Observable<any>;
  getItemService: Observable<any>;

  form!: FormGroup;
  @Input() statusForm = { create: 0, edit: 0, editId: 0, list: 0, delete: 0 };
  @Output() statusFormEmit = new EventEmitter<any>();
  @Output() token = new EventEmitter<any>();
  @Output() validation = new EventEmitter<any>();

  constructor(
    protected brmService: BrmService,
    protected toastr: ToastrService,
    protected fb: FormBuilder
  ) {
    this.postService = new Observable((observer) => {
      observer.next('');
    });
    this.putService = new Observable((observer) => {
      observer.next('');
    });
    this.getItemService = new Observable((observer) => {
      observer.next('');
    });
    this.validForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.statusForm.edit && this.statusForm.editId) {
      this.setSubmitMetods();
    }
  }

  validForm() {}

  setSubmitMetods() {
    this.formOperation();
  }

  formOperation() {
    if (this.statusForm.create) {
      this.toastr.success('Datos guardados exitosamente', 'Datos guardados');
      this.postService.subscribe((response) => {
        this.cleanForm();
      });
    } else {
      this.getItemService.subscribe((data) => this.handleEditSuccess(data));
    }
  }

  saveUpdate() {}

  handleEditSuccess(data: object) {
    this.form.patchValue(data);
  }

  cleanForm() {
    this.form.reset();
    this.statusFormEmit.emit({
      create: 0,
      list: 1,
      edit: 0,
      editId: 0,
      delete: 0,
    });
  }
}
