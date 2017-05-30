import { HttpRestUtils } from "./src/ngx-http-rest.utils";
export * from './src/ngx-http-rest.module';

// Interceptor
export let Interceptor = HttpRestUtils.interceptor;

// Request params
export let Path = HttpRestUtils.addMetadata('path');
export let PathParam = HttpRestUtils.addMetadata('path');
export let Body = HttpRestUtils.addMetadata('body')(null);
export let Query = HttpRestUtils.addMetadata('query');
export let QueryParam = HttpRestUtils.addMetadata('query');
export let QueryParams = HttpRestUtils.addMetadata('query')(null);

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