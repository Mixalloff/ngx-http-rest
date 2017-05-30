import { HttpRestService } from './ngx-http-rest.service';
import { HttpModule, XHRBackend, RequestOptions, Http } from '@angular/http';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [HttpModule],
    providers: [
      {
        provide: Http,
        useFactory: (backend: XHRBackend, defaultOptions: RequestOptions) => new HttpRestService(backend, defaultOptions),
        deps: [XHRBackend, RequestOptions]
      }]
})
export class HttpRestModule {
}