# ngx-http-annotations

This library allows to interact with rest api in your angular app.
It contains:

  - Annotations for http methods (@GET, @POST, @PUT, @DELETE, @OPTIONS, @HEAD, @PATCH)
  - Annotations for adding headers, setting produces results and intercepting response
  - Params annotations
  
  forked from : https://github.com/Mixalloff/ngx-http-rest 

### Installation

Install through npm:

```sh
$ npm install ngx-http-annotations --save
```


### Development

Example of using library.

1) Plug the HttpRestModule into your AppModule

```typescript
import { HttpRestModule } from 'ngx-http-annotations';
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
import { HttpRestService, GET, POST, DELETE, Path, PathParam, Body, QueryParam, QueryParams, ResponseObservable } from 'ngx-http-annotations';
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
@Headers({
  'someHeader1': 'headerValue1',
  'someHeader2': 'headerValue2'
})
@Path(`/test/goods`)
export class SomeRestService extends HttpRestService {

  @GET
  getGoods(@QueryParams /* Object with queryParams { [name: string]: [value: any] } */ queryObj?: any): any {}

  @GET
  getGoodsBySomeParam(@QueryParam('sales') /* ...?sales= */ isSold: boolean): any {}

  @GET
  @Path('/:id')
  getGoodsItemById(@PathParam('id') itemId: number): any {}

  @GET
  @Path('/:id/child/:childId') /* Few path params */
  getChildrenOfSomeGoods(@PathParam('id') id: number,
                         @PathParam('childId') childId: number
                         @QueryParam('sales') isSold: boolean,
                         @QueryParam('someParam') some: any): any {}

  @POST
  @Path('/create')
  createGoods(@Body /* Body of POST request */ goodsObject: GoodsItem): any {}

  @DELETE
  @Path('/:id')
  removeGoodsById(@PathParam('id') itemId: number): any {}
  
  @GET
  @Path('posts')
  /**
  * getPostForUserId(3, 2) : call the the url /posts?userId=2 and only take 3 results
  */
  public getPostForUserId(number: number, @QueryParam('userId') userId: number, @ResponseObservable res: Observable<any> = undefined): Observable<any> {
    return res.pipe(map((response) => response.slice(0, number)));
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
 - @Headers - set headers for request (if annotate class, then all class methods getting this headers. method Headers merge with class Headers)
 - @Produces - setting expected response type. By default Reponse transformed by .json() method
 - @Observes - setting http observes.
 3) Parameters
 - @PathParam (or @Path) - pass current parameter by name to collected url. Example: someFunc(@PathParam('id') itemId: number) {}
 - @Body - pass body object into request. Ex.: someMethod(@Body bodyObject: any){}
 - @QueryParam - pass single query parameters into request. Ex.: someMethod(@QueryParam('a') a: any, @QueryParam('b') b: any) {}. someMethod(1, 2) -> ..requested_url..?a=1&b=2
 - @QueryParams - pass object with few query params. Ex.: someMethod(@QueryParams queryObj: any){}. someMethod({x: 1, y: 2, z: 3}) -> ..requested_url..?x=1&y=2&z=3
 - @ResponseObservable - specify in witch function params, the response observable will be added. Ex.: someMethod(@ResponseObservable res: Observable<any> = undefined){ /* transform request */ return res; }. need to initialise as undefined to pass compile error, and return a response. 
 
 
 #### Transform response with all rxjs function
 
 By adding the parameters @ResponseObservable you can specify, where add the observable response, 
 
  ```typescript
    
    @GET
    @Path('posts')
    /**
    * getPostForUserId(3, 2) : call the the url /posts?userId=2 and only take 3 results
    */
    public getPostForUserId(number: number, @QueryParam('userId') userId: number, @ResponseObservable res: Observable<any> = undefined): Observable<any> {
      return res.pipe(map((response) => response.slice(0, number)));
    }
  ```
