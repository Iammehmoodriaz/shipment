import { AfterContentChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderState } from '../../models';
import { LoaderService } from 'src/app/core';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent implements OnInit, AfterContentChecked {
  show: boolean = false;
  private subscription: Subscription;
  constructor(private _loaderService: LoaderService,
    private cdr: ChangeDetectorRef,) { }

  ngOnInit() {
    this.show = false
    this._loaderService.loaderState
      .subscribe((state: LoaderState) => {
        this.show = state.show;
      });

  }
  ngAfterContentChecked(): void {
    this.cdr.detectChanges();
  }


}
