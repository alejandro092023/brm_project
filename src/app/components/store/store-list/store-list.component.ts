import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BaseListDirective } from 'src/app/directives/base-list.directive';
import { BrmService } from 'src/app/services/brm.service';
import { UtilsModule } from 'src/app/shared/utils/utils.module';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.sass'],
})
export class StoreListComponent extends BaseListDirective {
  constructor(
    brmService: BrmService,
    toast: ToastrService,
    utils: UtilsModule
  ) {
    super(brmService, toast, utils);
  }

  ngOnInit(): void {
    this.listService = this.brmService.products();
    this.getItems();
  }
}
