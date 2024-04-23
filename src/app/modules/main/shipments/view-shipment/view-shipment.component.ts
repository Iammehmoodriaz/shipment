import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShipmentsService } from 'src/app/core/services/basicServices/shipments.service';

@Component({
  selector: 'app-view-shipment',
  templateUrl: './view-shipment.component.html',
  styleUrls: ['./view-shipment.component.scss']
})
export class ViewShipmentComponent implements OnInit {
  id=null;
  pdfSrc = "";
  constructor(private shipmentService:ShipmentsService,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    
    this._activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
    });
    if(this.id){
      this.getShipmentbyID()
    }
  }

  getShipmentbyID(){
    this.shipmentService.getShipmentbyID(this.id).subscribe(res=>{
      if(res){
        this.pdfSrc=res.lable;
      }
    })
  }

}
