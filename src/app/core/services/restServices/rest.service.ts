import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { retry, catchError, first } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import  {environment} from '../../../../environments/environment';
var baseURL=environment.baseURL
@Injectable({
  providedIn: 'root'
})
export class HttpRestService {

  constructor(
    private _http: HttpClient,
    private _snackBar: MatSnackBar
  ) { }
  private errorMessage = null
  protected get headers() {
    let headers = {
      'Content-Type': 'application/json',
    }
    return headers;
  }

  protected get(relativeUrl: string,headers?: any): Observable<any> {
    return this._http.get(baseURL + relativeUrl,{params: headers})
      .pipe(
        first(),
        catchError(this.handleError.bind(this))
      );

  }

  protected post(relativeUrl: string, body?: any, headers?: any): Observable<any> {
    return this._http.post(baseURL + relativeUrl, body, { headers: headers })
      .pipe(
        first(),
        catchError(this.handleError.bind(this))
      );
  }
  protected put(relativeUrl: string, body?: any, headers?: any): Observable<any> {
    return this._http.put(baseURL + relativeUrl, body, { headers: headers })
      .pipe(
        first(),
        catchError(this.handleError.bind(this))
      );
  }
  protected delete(relativeUrl: string, body?: any, headers?: any): Observable<any> {
    let options = {
      headers: headers,
      body: body,
    }
    return this._http.delete(baseURL + relativeUrl, options).pipe(
      first(),
      catchError(this.handleError.bind(this))
    );
  }

  private handleError(error: any) {
    // console.log(error)
    this.errorMessage = error.error.message ? error.error.message : error.message;
    this._snackBar.open(this.errorMessage, 'Ok')
    return throwError(this.errorMessage);
  }
}
