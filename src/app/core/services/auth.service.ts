import { Injectable } from "@angular/core";
import { Login } from "src/app/shared/models";
import { Observable, observable } from "rxjs";
import { HttpRestService, BaseService, apiPath } from "@services";
import { map } from 'rxjs/operators';
import { getuid } from "process";
import { ObserversModule } from "@angular/cdk/observers";
import { HttpClient } from "@angular/common/http";
import { Router, RouterStateSnapshot } from "@angular/router";
import { environment } from "@environment/environment";
import { MatSnackBar } from "@angular/material/snack-bar";
import { TokenHelper } from "src/app/helpers/token-helper";
@Injectable({
  providedIn: "root",
})
export class AuthService extends BaseService {
  constructor(
    protected httpClient: HttpClient,
    protected _route: Router,
    public Alerts: MatSnackBar
  ) {
    super(httpClient);
  }

  public userLogin(data: Login) {

    let onSuccess = (value) => {
      let data = value.value;
      if (data.data.success) {
        this.Alerts.open('Login Successfull', 'ok');
        return data.data.data;
      }
      else {
        this.Alerts.open(data.message.text, 'ok');
        return false
      }
    }
    return this.service(this.post(apiPath.authLogin, data)).pipe(
      map(value => this.processPayload(value)),
      map(onSuccess)
    );
  }


  public Logout() {
    TokenHelper.removeAccessToken();
    this._route.navigate(["/login"], {
      // queryParams: { returnUrl: this._route.routerState.snapshot.url },
    });
  }

}
