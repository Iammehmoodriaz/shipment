import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(
   ) { }

  sum(value){
    return _.sum(value);
  }

  
}
