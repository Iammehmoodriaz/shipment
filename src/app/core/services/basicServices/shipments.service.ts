import { Injectable } from '@angular/core';
import { BaseService } from '../api-service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { DatePipe } from '@angular/common';
import { apiPath } from '../const';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShipmentsService extends BaseService {

  constructor(public httpClient: HttpClient, public Alerts: MatSnackBar,
    public datepipe: DatePipe) {
    super(httpClient);
  }
  
  getAllShipments(data) {
    data.startDate= this.datepipe.transform(data.startDate,"yyyy-MM-dd") ;
    data.endDate= this.datepipe.transform(data.endDate,"yyyy-MM-dd") ;
    let onSuccess = (value) => {
      let data = value.value;
      if (data.data.success) {
        return data.data.data;
      }
      else{
        this.Alerts.open('Internal Server Error','ok');
        return false
      }
    }
    return this.service(this.get(apiPath.getShipments,data)).pipe(
      map(value => this.processPayload(value)),
      map(onSuccess)
    );
  }

  getShipmentbyID(id) {
    let params= new HttpParams().set('shipmentId',id)
    let onSuccess = (value) => {
      let data = value.value;
      if (data.data.success) {
        return data.data.data;
      }
      else{
        this.Alerts.open('Internal Server Error','ok');
        return false
      }
    }
    return this.service(this.get(apiPath.getShipmentbyID,params)).pipe(
      map(value => this.processPayload(value)),
      map(onSuccess)
    );
  }

  createShipment(data){
    data.dateOfShipment= this.datepipe.transform(data.dateOfShipment,"yyyy-MM-dd") ;
    let onSuccess = (value) => {
    let data = value.value;
    if (data.data.success) {
      return data.data.data;
    }
    else{
      this.Alerts.open('Internal Server Error','ok');
      return false
    }
  }
  return this.service(this.post(apiPath.createShipment,data)).pipe(
    map(value => this.processPayload(value)),
    map(onSuccess)
  );
  }
}
