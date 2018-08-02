import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'home', component: HomeComponent},
  {path: 'navigation', component: NavbarComponent},
  

];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
  
})
export class AppRoutingModule { }
