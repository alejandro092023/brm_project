import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'auth',
        component: AuthComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'config',
        loadChildren: () =>
          import('./configuration/configuration.module').then(
            (m) => m.ConfigurationModule
          ),
      },
      {
        path: '**',
        redirectTo: 'auth',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}
