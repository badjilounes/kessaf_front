import {Component, OnInit, NgZone, ChangeDetectorRef} from '@angular/core';
import {Router} from "@angular/router";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {ApiService} from "../../services/api/api.service";
import {UserLoginInput} from "../../model/app/auth/input/login/login.input";
import {UserSubscriptionInput} from "../../model/app/auth/input/subscription/user.input";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material";
import {SnackbarComponent} from "../utils/snackbar/snackbar.component";
import {SnackType} from "../../enum/snackbar/snackType.enum";
import {SnackInfoInput} from "../../model/app/auth/input/snackInfo/snackInfo.input";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  subscriptionForm: FormGroup;

  userLogin: UserLoginInput = {usernameMobileMail: '', password: ''};
  userSubscription: UserSubscriptionInput = {username: '', email: '', phone: '', password: ''};

  wannaSubscribe: boolean;
  formValidated = false;
  snackTypeEnum = SnackType;

  headingTxt: string;
  hidePass = true;


  constructor(public router: Router, private fb: FormBuilder,
              public zone: NgZone, public cdr: ChangeDetectorRef,
              public snackBar: MatSnackBar,
              public api: ApiService) {}

  ngOnInit() {
    this.getRouterInfo();
    this.setHeadingTxt();
    this.initForms();
  }

  getRouterInfo(): void {
    this.wannaSubscribe = (this.router.url.split('/')[1] == 'signup');
  }

  setHeadingTxt(): void {
    this.headingTxt = (this.wannaSubscribe) ? 'Inscription' : 'Connexion';
  }

  initForms(): void {
    this.loginForm = this.fb.group({
      usernameMobileMail: [this.userLogin.usernameMobileMail, Validators.required],
      password: [this.userLogin.password, Validators.required]
    });

    this.subscriptionForm = this.fb.group({
      username: [this.userSubscription.username, Validators.required, Validators.minLength(5)],
      email: [this.userSubscription.email, Validators.required],
      phone: [this.userSubscription.phone, Validators.required],
      password: [this.userSubscription.password, Validators.compose([Validators.required, Validators.minLength(9)])]
    });
  }

  validationForm() : void {

  }

  login(): void {
    // this.router.navigate(['home']);
    this.checkForm();
  }

  checkForm(): void {
    this.formValidated = false;
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.zone.run(() => {
          this.formValidated = true;
          this.cdr.markForCheck();
        });
      }, 200);
    });

    if (this.wannaSubscribe) {
          if (!this.subscriptionForm.valid) {

            let snackInfo: SnackInfoInput = {
              type: this.snackTypeEnum.error,
              message: "Nom de compte ou mot de passe incorrect"
            };

            let config: MatSnackBarConfig = {
              duration: 3000,
              extraClasses: ['snackbar-error'],
              data: snackInfo
            };

            this.snackBar.openFromComponent(SnackbarComponent, config);
          }
    } else {
      if (!this.loginForm.valid) {

      }
    }
  }

  subscribe(): void {
    // this.router.navigate(['login']);
    console.log('trying to subscribe ...');
    this.checkForm();
  }

}
