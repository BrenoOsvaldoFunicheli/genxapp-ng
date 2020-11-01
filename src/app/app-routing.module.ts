import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { AuthGuard } from './services/account/auth.guard';
import { HomeComponent } from './layout/home/home.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { TablesComponent } from './components/tables/tables.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: TablesComponent },
      { path: 'edicao', component: UserEditComponent }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'registro', component: UserRegisterComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
