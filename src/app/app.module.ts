import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ApiService} from "./services/api.service";
import {CommonModule} from "@angular/common";
import {
  HTTP_ANNOTATIONS_USE_MOCKS,
  HttpRestUtils
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
  providers: [ApiService, { provide: HTTP_ANNOTATIONS_USE_MOCKS, useValue: true }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private http: HttpClient) {
    console.log('AppModule constructor 1 : ', HttpRestUtils.http, http);
    if (!HttpRestUtils.http) {
        HttpRestUtils.http = http;
        console.log('AppModule constructor 2 : ', http, HttpRestUtils.http);
    }

  }
}
