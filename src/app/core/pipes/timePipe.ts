import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({name: 'shortTimePipe'})
export class timePipe {
  constructor(){}

  transform(value) {
      var v= value.split(":");
      var hr = parseInt(v[0]);
      if(hr>=12){

        return (hr==12?hr:hr-12)+":"+v[1]+" PM"
      }
      else{
        return hr+":"+v[1]+" AM"
      }

  }
}