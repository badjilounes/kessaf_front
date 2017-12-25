import {ApiService} from "../../../../services/api/api.service";
import {ApiLoginOutput} from "../../auth/api/output/login/apiLogin.output";
import {ApiLoginInput} from "../../auth/api/input/login/apiLogin.input";
import {Observable} from "rxjs";
import {ApiSubscriptionInput} from "../../auth/api/input/subscription/apiSubscription.input";
import {ApiSubscriptionOutput} from "../../auth/api/output/subscription/apiSubscription.output";
export class LoginDAO {
  constructor(private api: ApiService){}

  login(inputLogin: ApiLoginInput): Observable<ApiLoginOutput> {
    return this.api.post('login', inputLogin);
  }

  subscribe(inputSubscription: ApiSubscriptionInput): Observable<ApiSubscriptionOutput> {
    return this.api.post('subscribe', inputSubscription);
  }

}
