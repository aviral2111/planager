import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule,MatCardModule, MatInputModule,
         MatFormFieldModule, MatBadgeModule, MatAutocompleteModule, MatButtonToggleModule, MatIconModule,
         MatMenuModule, MatListModule, MatLineModule, MatTabsModule, MatRadioModule, MatSelectModule,
         MatSidenavModule, MatTooltipModule, MatOptionModule, MatProgressSpinnerModule,   } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './/app-routing.module';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    HomeComponent,
    SigninComponent,
    RegisterComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    CommonModule, 
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    AppRoutingModule,
    MatCardModule,MatSidenavModule, MatTooltipModule, MatOptionModule,
    MatFormFieldModule,MatInputModule, MatBadgeModule, MatAutocompleteModule, 
    MatButtonToggleModule, MatIconModule, MatProgressSpinnerModule,
    MatMenuModule, MatListModule, MatLineModule, MatTabsModule, MatRadioModule, MatSelectModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
