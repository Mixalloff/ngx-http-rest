import {NgModule, APP_INITIALIZER, Inject} from '@angular/core';
import { HttpRestUtils } from "./ngx-http-annotations.utils";
import { HttpClient } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";
import {CommonModule} from "@angular/common";
// @dynamic
@NgModule({
    imports: [CommonModule, HttpClientModule],
    providers: [
      { provide: APP_INITIALIZER, useFactory: onAppInit, multi: true, deps: [HttpClient] }
    ]
})
export class HttpRestModule {

}

export function onAppInit(http: HttpClient) {
  return function () {
    HttpRestUtils.http = http;
  }
}