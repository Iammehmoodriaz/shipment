import { Component, OnInit, ViewChild, AfterViewInit, HostListener, ChangeDetectorRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from './../../core/services/auth.service';
import { MatSidenav } from '@angular/material/sidenav';
import { MatDialog } from '@angular/material/dialog';
import { fromEvent } from 'rxjs';
import { event } from 'jquery';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private _snackBar: MatSnackBar,
    private _authService: AuthService,
    private _router: Router,
    public dialog: MatDialog,
  ) {
    
  }

  toggler: boolean = false;

  ngOnInit() {
    
  }

  logout() {
    this._authService.Logout();
  }


}
