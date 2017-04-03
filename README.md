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
  getGoods(@QueryParams /* Object with queryParams { [name: string]: [value: any] } */ queryObj: any): any {}

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
export class TestComponent  implements OnInit {
  constructor(private someRestService: SomeRestService){}

  ngOnInit() {
    this.someRestService
      .getGoods()
      .subscribe( goods => console.log(goods) );
  }
}
```