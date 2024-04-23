import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShipmentsService } from 'src/app/core/services/basicServices/shipments.service';

@Component({
  selector: 'app-add-edit-shipment',
  templateUrl: './add-edit-shipment.component.html',
  styleUrls: ['./add-edit-shipment.component.scss']
})
export class AddEditShipmentComponent implements OnInit {

  form: FormGroup;
  dimUnits=[{id:'IN',name:'Inches'}];
  weightUnits=[{id:'OZ',name:'Ounces'}];
  constructor(
    public formBuilder: FormBuilder,
  private shipmentService:ShipmentsService) { }

  ngOnInit() {
    this.validateForm();
  }

  validateForm(){
    this.form = this.formBuilder.group({
      dateOfShipment: [''],
      fromAddress: this.formBuilder.group({
        addressLine1: [''],
        addressLine2: [''],
        addressLine3: [''],
        cityTown: [''],
        countryCode: [''],
        name: [''],
        company: [''],
        phone: ['',Validators.compose([Validators.required,Validators.pattern('^(?:\\(\\d{3}\\)?[-.\\s]?)?\\d{3}[-.\\s]?\\d{4}$')])],
        postalCode: ['', Validators.compose([Validators.required,Validators.pattern('\\d{5}')])],
        stateProvince: ['']
      }),
      toAddress: this.formBuilder.group({
        addressLine1: [''],
        addressLine2: [''],
        addressLine3: [''],
        cityTown: [''],
        countryCode: [''],
        name: [''],
        company: [''],
        phone: ['',Validators.compose([Validators.required,Validators.pattern('^(?:\\(\\d{3}\\)?[-.\\s]?)?\\d{3}[-.\\s]?\\d{4}$')])],
        postalCode: ['', Validators.compose([Validators.required,Validators.pattern('\\d{5}')])],
        stateProvince: ['']
      }),
      parcel: this.formBuilder.group({
        height: [''],
        length: [''],
        width: [''],
        dimUnit: [null],
        weightUnit: [null],
        weight: ['']
      })
    });
  }

  save(){
    this.shipmentService.createShipment(this.form.value).subscribe(res=>{
      if(res){
        
      }
    })
  }

}
