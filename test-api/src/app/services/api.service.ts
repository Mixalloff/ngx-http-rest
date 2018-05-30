import { Injectable } from '@angular/core';
import {GET, Path, PathParam, Headers} from "../../../../public_api";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
@Path('https://jsonplaceholder.typicode.com/')
@Headers({
  'someHeader1': 'headerValue1',
  'someHeader2': 'headerValue2'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  @GET
  @Path('posts/:id')
  public getPost(@PathParam('id') id: number): Observable<any> {
    //return this.http.request('GET', 'https://jsonplaceholder.typicode.com/posts/'+id);
    return null;
  }


  public func1(@PathParam('aaa') bbb: number) {
      return bbb;
  }

  public func2(@PathParam(null) ccc: number) {
      return ccc;
  }
}
