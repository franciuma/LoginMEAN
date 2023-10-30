import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Componentes
import { LoginViewComponent } from './components/login-view/login-view.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginViewComponent,
  },
  {
    path: 'principal',
    component: MainViewComponent,
  },
  {
    path: 'admin',
    component: AdminViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
