import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = false;
  username = '';
  password = '';

  constructor(public api: ApiService, public router: Router) { }

  ngOnInit() {
  }

  login(): void {
    // this.api.post('login', {username: this.username, password: this.password }, true).toPromise().then(
    //   val => console.log(val), error => console.log(error)
    // );
    this.router.navigate(['home']);
  }

}
