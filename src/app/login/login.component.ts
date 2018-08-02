import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _route:Router) { }
  username : string
  password : string

  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
     this._route.navigate(["/home"]);
    }else {
      alert("Invalid credentials");
    }
  }

  ngOnInit() {
  }

}
