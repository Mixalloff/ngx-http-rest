export * from './src/ngx-http-rest.module';
import { Response } from '@angular/http';
import { HttpRestUtils, path, body, query, headers, produces } from "ngx-http-rest/src/ngx-http-rest.utils";

// Interceptor
export let Interceptor = HttpRestUtils.interceptor;

export let Path = path;
export let PathParam = path;
export let Body = body(null);
export let Query = query(null);
export let QueryParam = query;
export let QueryParams = query(null);

// Headers
export let Headers = headers;

// Produces
export let Produces = produces;
export let NoResponse = produces(null);
export let DefaultResponse = produces(Response);

// Request methods
export const GET = HttpRestUtils.requestMethod('Get')
export let POST = HttpRestUtils.requestMethod('Post');
export let PUT = HttpRestUtils.requestMethod('Put');
export let DELETE = HttpRestUtils.requestMethod('Deletee');
export let OPTIONS = HttpRestUtils.requestMethod('Options');
export let HEAD = HttpRestUtils.requestMethod('Head');
export let PATCH = HttpRestUtils.requestMethod('Patch');