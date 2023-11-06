import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Componentes
import { LoginViewComponent } from './components/login-view/login-view.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
import { RegisterViewComponent } from './components/register-view/register-view.component';
import { EditUserViewComponent } from './components/edit-user-view/edit-user-view.component';
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
  {
    path: 'registro',
    component: RegisterViewComponent,
  },
  {
    path: 'editar/:userId',
    component: EditUserViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
