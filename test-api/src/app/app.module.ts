import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpRestModule} from "../../../src/ngx-http-annotations.module";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ApiService} from "./services/api.service";
import {CommonModule} from "@angular/common";
import {HttpRestUtils} from "../../../src/ngx-http-annotations.utils";

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
  providers: [ApiService],
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
