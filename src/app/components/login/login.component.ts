import {Component, OnInit, NgZone, ChangeDetectorRef} from '@angular/core';
import {Router} from "@angular/router";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {UserLoginInput} from "../../model/app/auth/input/login/login.input";
import {ApiSubscriptionInput} from "../../model/app/auth/api/input/subscription/apiSubscription.input";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material";
import {SnackbarComponent} from "../utils/snackbar/snackbar.component";
import {SnackType} from "../../enum/snackbar/snackType.enum";
import {SnackInfoInput} from "../../model/app/auth/input/snackInfo/snackInfo.input";
import {LoginService} from "../../services/login/login.service";
import {ApiLoginInput} from "../../model/app/auth/api/input/login/apiLogin.input";
import {LbtPhoneValidator} from "../../model/app/validators/phone/phone.validator";
import {UserSubscribeInput} from "../../model/app/auth/input/subscription/subscribe.input";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  subscriptionForm: FormGroup;

  userLogin: UserLoginInput = {usernameMobileMail: '', password: ''};
  userSubscription: UserSubscribeInput = {username: '', email: '', phone: '', password: ''};

  wannaSubscribe: boolean;
  formValidated = false;
  snackTypeEnum = SnackType;

  headingTxt: string;
  hidePass = true;

  sub: any = {
    usernameMobileMail: null,
    passLogin: null,
    username: null,
    email: null,
    phone: null,
    passSubscribe: null
  };


  constructor(public router: Router, private fb: FormBuilder,
              public zone: NgZone, public cdr: ChangeDetectorRef,
              public snackBar: MatSnackBar, public loginSrv: LoginService) {}

  ngOnInit() {

    this.wannaSubscribe = (this.router.url.split('/')[1] == 'signup');

    this.headingTxt = (this.wannaSubscribe) ? 'Inscription' : 'Connexion';

    this.initForms();

  }

  triggerLabelsStateChecker(): void {

    this.formValidated = false;

    this.zone.runOutsideAngular(() => {

      setTimeout(() => {

        this.zone.run(() => {

          this.formValidated = true;

          this.cdr.markForCheck();

        });

      }, 200);

    });

  }

  initForms(): void {

    this.loginForm = this.fb.group({
      usernameMobileMail: [this.userLogin.usernameMobileMail, Validators.required],
      password: [this.userLogin.password, Validators.required]
    });

    this.subscriptionForm = this.fb.group({
      username: [this.userSubscription.username,
        Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])
      ],
      email: [this.userSubscription.email,
        Validators.compose([
          Validators.required,
          Validators.email
        ])
      ],
      phone: [
        this.userSubscription.phone,
        Validators.compose([
          Validators.required,
          LbtPhoneValidator()
        ])
      ],
      password: [this.userSubscription.password, Validators.compose([Validators.required, Validators.minLength(9)])]
    });
  }

  checkForm(): void {

    this.triggerLabelsStateChecker();

    if (this.wannaSubscribe) {

      if (!this.subscriptionForm.valid) {

        let snackInfo: SnackInfoInput = this.getSnackSubscriptionInfo();

        let config: MatSnackBarConfig = {
          duration: 3000,
          extraClasses: ['snackbar-error'],
          data: snackInfo
        };

        this.snackBar.openFromComponent(SnackbarComponent, config);

      } else {

        this.subscribe();

      }

    } else {

      this.login();

    }
  }

  getSnackSubscriptionInfo(): SnackInfoInput {

    let snackInfo: SnackInfoInput = {
        type: this.snackTypeEnum.error,
        message: ""
    };

    if (!this.subscriptionForm.controls['username'].valid) {
      snackInfo.message = '';
    }

    return snackInfo;

  }


  login(): void {
    let loginInput: ApiLoginInput = {
      id: this.loginForm.controls['usernameMobileMail'].value,
      passKey: this.loginForm.controls['password'].value
    };

    this.loginSrv.login(loginInput).toPromise().then(
      val => console.log(val), error => console.log(error)
    );
  }

  subscribe(): void {

    console.log('trying to subscribe ...');

    let subscriptionInput: ApiSubscriptionInput = {
      username: this.subscriptionForm.controls['username'].value,
      email: this.subscriptionForm.controls['email'].value,
      phone: this.subscriptionForm.controls['phone'].value,
      password: this.subscriptionForm.controls['password'].value
    };

    this.loginSrv.subscribe(subscriptionInput).toPromise().then(
      val => {
        console.log(val);
        this.router.navigate(['login']);
      },
      error => {
        console.log(error);
      }
    );

  }

}
