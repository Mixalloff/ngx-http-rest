# ngx-http-rest

This library allows to interact with rest api in your angular app.
It contains:

  - Annotations for http methods (@GET, @POST, @PUT, @DELETE, @OPTIONS, @HEAD, @PATCH)
  - Annotations for adding headers, setting produces results and intercepting response
  - Params anotations

### Installation

Install through npm:

```sh
$ npm install ngx-http-rest --save
```


### Development

Example of using library.

1) Plug the HttpRestModule into your AppModule

```typescript
import { HttpRestModule } from 'ngx-http-rest';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    HttpRestModule
  ]
})
export class AppModule {
}
```

2) Create a service to work with rest api. Inherit it from HttpRestService from 'ngx-http-rest'. Put annotations on the class, methods and params.


```typescript
import { HttpRestService, GET, Path, PathParam, QueryParam, QueryParams } from 'ngx-http-rest';
import { Injectable } from '@angular/core';
import RestConfig from 'app/core/configs/rest.config';

interface GoodsItem {
  id: number,
  name: string,
  price: number,
  sales?: boolean;
  desc?: string;
  children?: Array<GoodsItem>;
}

@Injectable()
@Headers([
  'someHeader1': 'headerValue1',
  'someHeader2': 'headerValue2'
])
@Path(`${ RestConfig.BASE_PATH }/goods`)
export class SomeRestService extends HttpRestService {

  @GET
  getGoods(@QueryParams /* Object with queryParams { [name: string]: [value: any] } */ queryObj?: any): any {}

  @GET
  getGoodsBySomeParam(@QueryParam('sales') /* ...?sales= */ isSold: boolean): any {}

  @GET
  @Path('/:id')
  getGoodsItemById(@PathParam('id') itemId: number): any {}

  @GET
  @Interceptor(SomeRestService.logInterceptor) /* Set response interceptor */
  @Path('/:id/child/:childId') /* Few path params */
  getChildrenOfSomeGoods(@PathParam('id') id: number,
                         @PathParam('childId') childId: number
                         @QueryParam('sales') isSold: boolean,
                         @QueryParam('someParam') some: any): any {}

  @POST
  @Path('/create')
  createGoods(@Body /* Body of POST request */ goodsObject: GoodsItem): any {}

  @DELETE
  @NoResponse /* This method doesn`t process the body of response */
  @Path('/:id')
  removeGoodsById(@PathParam('id') itemId: number): any {}

  private static logInterceptor(response: any) {
    console.log(response);
  }

}
```

3) Call the request method from component

```typescript
import { Component, OnInit } from '@angular/core';
import { SomeRestService } from './some-rest.service';

@Component({
  selector: 'some-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css'],
  providers: [SomeRestService]
})
export class TestComponent implements OnInit {
  constructor(private someRestService: SomeRestService){}

  ngOnInit() {
    this.someRestService
      .getGoods()
      .subscribe( goods => console.log(goods) );
  }
}
```

### Description
Available annotations:
1) Request methods
@GET, @POST, @PUT, @DELETE, @OPTIONS, @HEAD, @PATCH - marks methods implementing the corresponding requests
2) Added settings
 - @Path - set path of url for request. Combined class @Path annotation value and current method @Path. Path params passed with ":". For example @Path('/someurl/:someParam')
 - @Headers - add array of headers to your request (if annotate class, then all class methods getting this headers)
 - @Produces - setting expected response type. By default Reponse transformed by .json() method
 - @NoResponse (alias for @Produces(null)) - if expected empty response body, you need to set that annotation
 - @DefaultResponse (alias for @Produces(Response)) - response doesn`t transformed with .json() method. Returned pure Response object
3) Parameters
 - @PathParam (or @Path) - pass current parameter by name to collected url. Example: someFunc(@PathParam('id') itemId: number) {}
 - @Body - pass body object into request. Ex.: someMethod(@Body bodyObject: any){}
 - @QueryParam - pass single query parameters into request. Ex.: someMethod(@QueryParam('a') a: any, @QueryParam('b') b: any) {}. someMethod(1, 2) -> ..requested_url..?a=1&b=2
 - @QueryParams - pass object with few query params. Ex.: someMethod(@QueryParams queryObj: any){}. someMethod({x: 1, y: 2, z: 3}) -> ..requested_url..?x=1&y=2&z=3