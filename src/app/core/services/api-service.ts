
import { IPayload, PayloadMapper } from '../../interfaces/PayLoad';
import { Helpers } from '../../helpers';
import { MessageTypes } from './const'
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpResponse, HttpEvent, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router, RouterStateSnapshot } from '@angular/router';
var baseURL = environment.baseURL


export interface IBaseService {
    service: <T>(cb: Observable<{}>) => Observable<any>;
    get: <T>(endPoint: string, params?: any) => Observable<any>;
    post: <T>(endPoint: string, model?: any) => Observable<any>;
}

interface IProcessPayloadOptions<T> {
    messageTypeIds?: string[];
}

export abstract class BaseService implements IBaseService {

    constructor(protected httpClient: HttpClient
        ) { }

        protected get headers() {
            let headers = {
              'Content-Type': 'application/json'
            }
            return headers;
          }
        

    processPayload<T>(payload , messageTypeIds?: string[]): Observable<T> {
        const message = payload.message;

        messageTypeIds = messageTypeIds || [MessageTypes.error, MessageTypes.failure];

        const messageTypeId = messageTypeIds.find(o => o === message.message);
        if (messageTypeId) {
            return Observable.throw(payload.message);
        } else {
            return of(payload);
        }
    }

    service<T>(cb: Observable<{}>): Observable<IPayload<T>> {
        const onFulfilled = (value) => new PayloadMapper().fromObject<T>(value);
        const onRejection = (reason) => new PayloadMapper().fromObject<T>(reason);

        return cb.pipe(map(onFulfilled, onRejection));
    }

    /**
 * POST request
 * @param {string} endPoint end point of the api
 * @param {Object} params body of the request.
 * @param {IRequestOptions} options options of the request like headers, body, etc.
 * @returns {Observable<T>}
 */
    post<T>(endPoint, model?): Observable<T> {
        // if (model)
        //     model = Helpers.trimObject(model);
        return this.httpClient.post<T>(baseURL + endPoint,model)
    }

    /**
 * GET request
 * @param {string} endPoint it doesn't need / in front of the end point
 * @param {IRequestOptions} options options of the request like headers, body, etc.
 * @returns {Observable<T>}
 */
    get<T>(endPoint, params?): Observable<T> {
        if (params)
            return this.httpClient.get<T>(baseURL + endPoint, { params: params })
        else
            return this.httpClient.get<T>(baseURL + endPoint)
    }

}
