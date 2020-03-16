import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ApiService} from "./services/api.service";
import {CommonModule} from "@angular/common";
import {
  HTTP_ANNOTATIONS_USE_MOCKS
} from "../../projects/ngx-http-annotations/src/lib/ngx-http-annotations.utils";
import {HttpRestModule} from "../../projects/ngx-http-annotations/src/lib/ngx-http-annotations.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    HttpRestModule
  ],
  providers: [ApiService, { provide: HTTP_ANNOTATIONS_USE_MOCKS, useValue: (url, requestType, params, args): boolean => {
       console.log('useMock : ', url, requestType, params, args);
      return params.headers && typeof params.headers.useMock !== undefined && params.headers.useMock === "true";
    } }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {


  }
}
