import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/shared/models';

import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../../core/services/auth.service';
import { TokenHelper } from 'src/app/helpers/token-helper';
import { BroadcastService, MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private _authService: AuthService,
    private _route: ActivatedRoute,
    private _router: Router,
    // private broadcastService: BroadcastService, private authService: MsalService
  ) { }
  public returnUrl: string;
  public auth: Login = {
    username: '5zR9LoM8aQx7DIg2tF6Y',
    password: 'P@ssw0rd'
  }

  ngOnInit() {
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/main';
    if (TokenHelper.getAccessToken()) {
      this._router.navigate(['/main']);
    }
  }

  login() {
    this._authService.userLogin(this.auth).subscribe(response => {
      if (response) {
        debugger
        TokenHelper.setAccessToken(response.access_token);
        this._router.navigate([this.returnUrl])
      }

    })
  }
  // loginWithMS() {
  //   const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

  //   if (isIE) {
  //     this.authService.loginRedirect({
  //       extraScopesToConsent: ["user.read", "openid", "profile"]
  //     });
  //   } else {
  //     this.authService.loginPopup({
  //       extraScopesToConsent: ["user.read", "openid", "profile"]
  //     });
  //   }
  // }

}
