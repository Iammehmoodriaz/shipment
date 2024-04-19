import { Injectable } from "@angular/core";
import { BaseService } from "../api-service";
import { HttpClient, HttpParams } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";
import { apiPath } from "../const";
import { map } from "rxjs/operators";
import * as Actions from '../../store/hrms.actions';
import * as Reducers from '../../store/hrms.reducers';
import { Store } from "@ngrx/store";

@Injectable({
  providedIn: "root",
})
export class LookUpService extends BaseService {
  constructor(public httpClient: HttpClient, public Alerts: MatSnackBar,
    protected _store: Store<Reducers.State>
  ) {
    super(httpClient);
  }


  getAllSkillsForLookup() {
    let onSuccess = (value) => {
      let data = value.value;
      if (data.meta.success) {
        return data.data;
      }
      else {
        this.Alerts.open(data.meta.message, 'ok');
      }
    }
    return this.service(this.get(apiPath)).pipe(
      map(value => this.processPayload(value)),
      map(onSuccess)
    );
  }
}
