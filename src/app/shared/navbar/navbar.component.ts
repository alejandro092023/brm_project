import {
  ChangeDetectorRef,
  Component,
  DoCheck,
  EventEmitter,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BaseListDirective } from 'src/app/directives/base-list.directive';
import { BrmService } from 'src/app/services/brm.service';
import { UtilsModule } from '../utils/utils.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent extends BaseListDirective {
  constructor(
    brmService: BrmService,
    toast: ToastrService,
    utils: UtilsModule,
    public router: Router
  ) {
    super(brmService, toast, utils);
  }

  ngOnInit(): void {
    this.listService = this.brmService.menu();
    this.getItems();
  }

  override handleLoadData(data: any): void {
    data = data.filter((data: any) => {
      return data.type_ === 'NAVBAR';
    });
    super.handleLoadData(data);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth']);
  }
}
