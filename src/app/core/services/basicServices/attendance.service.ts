import { DatePipe } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map } from 'rxjs/operators';
import { BaseService } from '../api-service';
import { apiPath } from '../const';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService extends BaseService {

  constructor(public httpClient: HttpClient, public Alerts: MatSnackBar,
    public datepipe: DatePipe) {
    super(httpClient);
  }

  getAttendanceById(data) {
    data.start_date= this.datepipe.transform(data.start_date,"yyyy-MM-dd") ;
    data.end_date= this.datepipe.transform(data.end_date,"yyyy-MM-dd") ;
    let onSuccess = (value) => {
      let data = value.value;
      if (data.meta.success) {
        return data.data;
      }
      else{
        this.Alerts.open(data.meta.message,'ok');
      }
    }
    return this.service(this.post(apiPath,data)).pipe(
      map(value => this.processPayload(value)),
      map(onSuccess)
    );
  }

  getDetailofAttendanceDay(id,date) {
    // let d=date.split('-')
    // let a=new Date(d[1],d[0],d[2])
    // date= this.datepipe.transform(a,"yyyy-MM-dd") ;
    
    let param = new HttpParams().set('date',date).set('emp_id',id)
    let onSuccess = (value) => {
      let data = value.value;
      if (data.meta.success) {
        return data.data;
      }
      else{
        this.Alerts.open(data.meta.message,'ok');
      }
    }
    return this.service(this.get(apiPath,param)).pipe(
      map(value => this.processPayload(value)),
      map(onSuccess)
    );
  }

  markAttendanceItself(data){
    let onSuccess = (value) => {
      let data = value.value;
      if (data.meta.success) {
        this.Alerts.open(data.meta.message,'ok');
        return data.data;
      }
      else{
        this.Alerts.open(data.meta.message,'ok');
      }
    }
    return this.service(this.post(apiPath,data)).pipe(
      map(value => this.processPayload(value)),
      map(onSuccess)
    );
  }


}
