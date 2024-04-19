import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  public emmiterData = new Subject();
  constructor() { }
  subl = this.emmiterData.asObservable();
  getEmmiterValue(value) {
    this.emmiterData.next(value);
  }

}
