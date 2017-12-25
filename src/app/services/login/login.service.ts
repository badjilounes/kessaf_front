import { Injectable } from '@angular/core';
import {ApiService} from "../api/api.service";
import {ApiLoginInput} from "../../model/app/auth/api/input/login/apiLogin.input";
import {Observable} from "rxjs";
import {ApiLoginOutput} from "../../model/app/auth/api/output/login/apiLogin.output";
import {LoginDAO} from "../../model/app/DAO/login/login.dao";
import {ApiSubscriptionInput} from "../../model/app/auth/api/input/subscription/apiSubscription.input";
import {ApiSubscriptionOutput} from "../../model/app/auth/api/output/subscription/apiSubscription.output";

@Injectable()
export class LoginService {

  loginDAO: LoginDAO;

  constructor(private api: ApiService) {
    this.loginDAO = new LoginDAO(api);
  }

  login(inputLogin: ApiLoginInput): Observable<ApiLoginOutput> {
    return this.loginDAO.login(inputLogin);
  }

  subscribe(inputSubscription: ApiSubscriptionInput): Observable<ApiSubscriptionOutput> {
    return this.loginDAO.subscribe(inputSubscription);
  }

}
