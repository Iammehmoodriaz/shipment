import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSnackBar, MatTableDataSource, PageEvent } from '@angular/material';
import { Router } from '@angular/router';
import { ShipmentsService } from 'src/app/core/services/basicServices/shipments.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-shipments',
  templateUrl: './shipments.component.html',
  styleUrls: ['./shipments.component.scss']
})
export class ShipmentsComponent implements AfterViewInit {
 
  displayedColumns: string[] = ['parcelID', 'trackNo', 'service', 'shipmentID','status','actions'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator,{static:false}) paginator: MatPaginator;
 
  tableModel = {search:'', startDate:null,endDate:null,page:1,size:10 };

  constructor(private shipmentService:ShipmentsService,
    public router: Router,public Alerts: MatSnackBar) {
    this.dataSource.paginator = this.paginator; }

  ngAfterViewInit() {
    this.dataTableConfig();
  }


  dataTableConfig() {
    this.getList();
    this.dataSource.paginator = this.paginator;
  }

  getList(){
    if(this.tableModel.startDate && this.tableModel.endDate){
      if(Date.parse(this.tableModel.startDate) > Date.parse(this.tableModel.endDate)){
        this.Alerts.open('Start date should not be greater than End date','OK')
        return false;
      }
    }
    this.shipmentService.getAllShipments(this.tableModel).subscribe(res=>{
      if(res){
        this.dataSource.data=res.data;
      }
      else{
        this.dataSource.data=[];
      }
    })
  }

  onPaginate(pageEvent: PageEvent) {
    // debugger
    this.tableModel.size = pageEvent.pageSize;
    this.tableModel.page = pageEvent.pageIndex + 1;
    this.getList();
    // console.log(this.dataSource.sort)
  }

  view(id){
    if (id) {
      this.router.navigate(["main/viewShipment/"], { queryParams: { id: id } });
    } 
  }

  reset(){
    this.tableModel.search='';
    this.tableModel.startDate=null;
    this.tableModel.endDate=null;
    this.getList();
  }

}
