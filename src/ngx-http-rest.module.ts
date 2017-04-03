import { HttpRestService } from './ngx-http-rest.service';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [HttpModule],
    providers: [HttpRestService]
})
export class HttpRestModule {
}