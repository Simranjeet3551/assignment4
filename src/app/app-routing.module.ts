import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([{path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent}])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
