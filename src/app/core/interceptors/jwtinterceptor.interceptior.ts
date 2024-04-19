import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenHelper } from 'src/app/helpers/token-helper';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        // let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        let currentUser = TokenHelper.getAccessToken();
        // let currentUser = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpbl90aW1lIjoxNTg3NzUxNjIyLjcxNzYyMSwidXNlcl9pZCI6OX0.7XXbV9rFy1ONDJySAqE32fUiIcMv1XS38aZNuMYiUUM'
        if (currentUser) {
            request = request.clone({
                setHeaders: {
                    Authorization: `${currentUser}`
                }
            });
        }

        return next.handle(request);
    }
}