import { HttpModule, XHRBackend, RequestOptions, Http } from '@angular/http';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpRestUtils } from "./ngx-http-rest.utils";

@NgModule({
    imports: [HttpModule],
    providers: [
      { provide: APP_INITIALIZER, useFactory: onAppInit, multi: true, deps: [Http] }
    ]
})
export class HttpRestModule {
}

export function onAppInit(http: Http) {
  return function () {
    HttpRestUtils.http = http;
  }
}