import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoaderInterceptor } from './core/interceptors/loader.interceptor';
import { MaterialModule } from './shared';
import { MainModule } from './modules/main/main.module';
import { LoaderComponent } from './shared/widgets/loader/loader.component';
import { AuthService } from './core/services/auth.service';
import { TokenHelper } from './helpers/token-helper';
import { StoreModule } from '@ngrx/store';
import * as Reducers from './core/store/hrms.reducers';
import { NgxOrgChartModule } from 'ngx-org-chart';
import { MsalModule } from '@azure/msal-angular';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    MainModule,
    NgxOrgChartModule,
    // CalendarModule.forRoot({
    //   provide: DateAdapter,
    //   useFactory: adapterFactory,
    // }),
    // StoreModule.forRoot(
    //   { menu: Reducers.taskReducer },
    //   { metaReducers: [Reducers.clearState] }
    // ),
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  providers: [
    AuthService,
    TokenHelper,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
