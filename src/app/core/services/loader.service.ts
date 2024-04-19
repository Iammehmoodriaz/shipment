import { Injectable } from '@angular/core';
import { Observable, throwError, Subject } from 'rxjs';
import { LoaderState } from 'src/app/shared/models';

@Injectable({
    providedIn: 'root'
})
export class LoaderService {
    private loaderSubject = new Subject<LoaderState>();
    loaderState = this.loaderSubject.asObservable();
    constructor() { }
    show() {
        this.loaderSubject.next(<LoaderState>{ show: true });
    }
    hide() {
        this.loaderSubject.next(<LoaderState>{ show: false });
    }

}
