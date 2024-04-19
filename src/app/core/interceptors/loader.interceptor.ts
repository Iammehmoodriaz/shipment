import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { EMPTY, Observable, pipe, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LoaderService } from '@services';
import { TokenHelper } from 'src/app/helpers/token-helper';
import { Router } from '@angular/router';
@Injectable({
    providedIn: 'root'
})
export class LoaderInterceptor implements HttpInterceptor {
    
    constructor(
        private _loaderService: LoaderService,
        private _router: Router
    ) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.showLoader();
        var d = new Date();
        if (TokenHelper.getAccessToken()) {
            req = req.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + TokenHelper.getAccessToken(),
                    
                },
                headers: req.headers
                .set('Content-Type', 'application/json')
                .set('Time-Zone', d.getTimezoneOffset().toString())
            })
            
        }
        return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
            catchError(err => {
                console.error('interceptor error ---- ' + JSON.stringify(err));
                // debugger
                if (err.status == 401) {
                    this._router.navigate(['/authentication-required'], { skipLocationChange: true });
                    return EMPTY;
                }
                else if (err.status == 403) {
                    this._router.navigate(['/404'], { skipLocationChange: true });
                    return EMPTY;
                } else if (err.status == 0 || err.status == 502) {
                    this._router.navigate(['/something-wrong'], { skipLocationChange: true });
                    return EMPTY;
                }
                else {
                    // this.router.navigate(['/something-wrong'], { skipLocationChange: true });
                    // return throwError(err);
                }
            })
            if (event instanceof HttpResponse) {
                this.onEnd();
            }
        },
            (err: any) => {
                if (err.status == 401) {
                    TokenHelper.removeAccessToken();
                    this._router.navigate(['/login'], { skipLocationChange: true });
                    this.onEnd();
                    return EMPTY;
                }
                if(err.status==403){
                    
                    this._router.navigate(['/admin/403'], { skipLocationChange: true });
                    this.onEnd();
                    return EMPTY;
                }
                this.onEnd();
            }));
    }
    private onEnd(): void {
        this.hideLoader();
    }
    private showLoader(): void {
        this._loaderService.show();
    }
    private hideLoader(): void {
        this._loaderService.hide();
    }
}
