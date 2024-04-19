//import { AuthenticatedUser,JwtToken } from './../interfaces';
import { apiPath } from '@services*';
import jwt_decode from "jwt-decode";
import { IJwtToken } from '../interfaces';

export class TokenHelper {

    public static getAccessToken(): string {
        return localStorage.getItem(apiPath.accessTokenKey);
    }

    public static setAccessToken(token: string): void {
        return localStorage.setItem(apiPath.accessTokenKey, token);
    }

    public static removeAccessToken(): void {
        return localStorage.removeItem(apiPath.accessTokenKey);
    }

    public static getBearerToken() {
        const token = localStorage.getItem(apiPath.accessTokenKey);
        return {
            Authorization: token ? 'Bearer ' + token : null
        };
    }

    public static parseUserToken(token: string) {
        const user = { id: null, email: null, name: null, authenticated: false, isSuperAdmin: false, exp: null, is_company_owner: false };
        try {
            if (token) {
                var decodedToken: IJwtToken = jwt_decode(token);

                if (!user.authenticated)
                    user.authenticated = true;
                // debugger
                user.id = decodedToken['UserID']
                user.email = decodedToken['username'];
                user.name = decodedToken['name'];
                user.exp = new Date(decodedToken.exp * 1000);
                user.isSuperAdmin = decodedToken['is_super_admin'];
                user.is_company_owner = decodedToken['is_company_owner'];
            }

        } catch (error) {
            console.log(error);
        }
        return user;
    }


}
