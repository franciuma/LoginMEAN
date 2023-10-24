import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Componentes
import {LoginViewComponent} from './components/login-view/login-view.component'
const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
