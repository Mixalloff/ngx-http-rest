import {NgModule, APP_INITIALIZER, Inject, Injector} from '@angular/core';
import {HTTP_ANNOTATIONS_USE_MOCKS, HttpRestUtils} from "./ngx-http-annotations.utils";
import { HttpClient } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";
import {CommonModule} from "@angular/common";



// @dynamic
@NgModule({
    imports: [CommonModule, HttpClientModule],
    providers: [
      { provide: APP_INITIALIZER, useFactory: onAppInit, multi: true, deps: [HttpClient] },
      { provide: HTTP_ANNOTATIONS_USE_MOCKS, useValue: false }
    ]
})
export class HttpRestModule {

  constructor(private injector: Injector) {
    HttpRestUtils.appInjector = this.injector;
  }
}

export function onAppInit(http: HttpClient) {
  return function () {
    HttpRestUtils.http = http;
  }
}
