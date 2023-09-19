import { Directive, Input } from '@angular/core';
import { BaseListDirective } from './base-list.directive';

@Directive({
  selector: '[appBaseWrapper]',
})
export class BaseWrapperDirective {
  statusForm = {
    create: 0,
    list: 1,
    edit: 0,
    editId: 0,
    delete: 0,
  };

  toggleCreate(statusForm: any = this.statusForm) {
    console.log(statusForm);
    this.statusForm = statusForm;
  }
  toggleEdit(statusForm: any = this.statusForm) {
    this.statusForm = statusForm;
  }

  toggleList(statusForm: any = this.statusForm) {
    this.statusForm = statusForm;
  }
}
