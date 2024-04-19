import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { Notfound404Component } from './notfound404/notfound404.component';
import { Forbidden403Component } from './forbidden403/forbidden403.component';
import { ShipmentsComponent } from './shipments/shipments.component';
import { AddEditShipmentComponent } from './shipments/add-edit-shipment/add-edit-shipment.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'shipments',
        component: ShipmentsComponent
      },
      {
        path: 'addEditShipment',
        component: AddEditShipmentComponent
      },
      {
        path: '404',
        component: Notfound404Component
      },
      {
        path: '403',
        component: Forbidden403Component
      },
      {
        path: '**',
        redirectTo: '404'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
