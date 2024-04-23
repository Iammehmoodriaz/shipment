import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MaterialModule } from 'src/app/shared';
import { Safe } from 'src/app/core/pipes/safe';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { Notfound404Component } from './notfound404/notfound404.component';
import { RouterStateSnapshot } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Forbidden403Component } from './forbidden403/forbidden403.component';
import { CalendarModule } from 'angular-calendar';
import { WebcamModule } from 'ngx-webcam';
import { NgxPrintModule } from 'ngx-print';
import { ShipmentsComponent } from './shipments/shipments.component';
import { AddEditShipmentComponent } from './shipments/add-edit-shipment/add-edit-shipment.component';
import { ViewShipmentComponent } from './shipments/view-shipment/view-shipment.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [MainComponent, Safe, Notfound404Component,  Forbidden403Component, ShipmentsComponent, AddEditShipmentComponent, ViewShipmentComponent, ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    CalendarModule,
    WebcamModule, NgxPrintModule,
    PdfViewerModule
  ],
  entryComponents: [

  ],
  providers: [
    AuthGuard,
    DatePipe
  ]
})
export class MainModule { }
