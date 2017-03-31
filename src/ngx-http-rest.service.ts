import { HttpRestUtils } from './ngx-http-rest.utils';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, Response } from '@angular/http';

@Injectable()
export class HttpRestService {

  constructor(protected http: Http) {}

  public request<T>(options: RequestOptionsArgs, producesType: T): Observable <T> {
    return this.http.request(options.url, options)
      .map( (res: Response) => {
        if (producesType === null) return null;
        if (producesType === undefined) return res.json();
        if (<any>producesType === String) return res.text();
        if (<any>producesType === ArrayBuffer) return res.arrayBuffer();
        if (<any>producesType === Blob) return res.blob();
        if (res instanceof <any>producesType) return res;
        return <T>res.json();
      });
  }
}

// Interceptor
export let Interceptor = HttpRestUtils.interceptor;

// Request params
export let Path = HttpRestUtils.addMetadata('path');
export let PathParam = HttpRestUtils.addMetadata('path');
export let Body = HttpRestUtils.addMetadata('body')(null);
export let Query = HttpRestUtils.addMetadata('query');
export let QueryParam = HttpRestUtils.addMetadata('query');

// Headers
export let Headers = HttpRestUtils.addMetadata('headers');

// Produces
export let Produces = HttpRestUtils.addMetadata('produces');
export let NoResponse = HttpRestUtils.addMetadata('produces')(null);
export let DefaultResponse = HttpRestUtils.addMetadata('produces')(Response);

// Request methods
export let GET = HttpRestUtils.requestMethod('Get');
export let POST = HttpRestUtils.requestMethod('Post');
export let PUT = HttpRestUtils.requestMethod('Put');
export let DELETE = HttpRestUtils.requestMethod('Delete');
export let OPTIONS = HttpRestUtils.requestMethod('Options');
export let HEAD = HttpRestUtils.requestMethod('Head');
export let PATCH = HttpRestUtils.requestMethod('Patch');
