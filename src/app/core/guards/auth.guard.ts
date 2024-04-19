import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenHelper } from 'src/app/helpers/token-helper';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private _router: Router,
    ) {

    }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
       
        let storage = TokenHelper.getAccessToken();
        if(!storage){
            this._router.navigate(['/login'],{queryParams:{returnUrl:state.url}});
            return false
        }

        return true
    }

}
