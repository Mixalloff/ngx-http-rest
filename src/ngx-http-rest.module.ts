import { HttpRestService } from './ngx-http-rest.service';
import { Http } from '@angular/http';
import { NgModule } from '@angular/core';


@NgModule({
    providers: [HttpRestService, Http]
})
export class HttpRestModule {
}
