import { Component, DoCheck, ViewChild } from '@angular/core';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements DoCheck {
  @ViewChild('navbar', { static: false }) navbar: NavbarComponent | undefined;
  title = 'brm_frontend';

  token: any = null;

  ngDoCheck() {
    this.token = localStorage.getItem('token');
  }
}
