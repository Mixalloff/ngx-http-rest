import { Injectable } from '@angular/core';
import {
  GET,
  Path,
  PathParam,
  Headers,
  QueryParam,
  POST,
  Body,
  ResponseObservable,
  PUT,
  DELETE
} from '../../../../public_api';
import {HttpClient} from "@angular/common/http";
import {from, Observable} from "rxjs";
import {flatMap, map, mergeAll, take, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
@Headers({
  'someHeader1': 'headerValue1',
  'someHeader2': 'headerValue2',
  'Content-type': 'application/json; charset=UTF-8'
})
@Path('https://jsonplaceholder.typicode.com/')
export class ApiService {

  constructor(private http: HttpClient) { }

  @GET
  @Path('posts/:id')
  @Headers({
    'someHeader2': 'hackedHeader2',
  })
  public getPost(@PathParam('id') id: number): Observable<any> {
    //return this.http.request('GET', 'https://jsonplaceholder.typicode.com/posts/'+id);
    return null;
  }


  @GET
  @Path('posts')
  public getPostForUserId(number: number, @QueryParam('userId') userId: number, @ResponseObservable res: Observable<any> = undefined): Observable<any> {
    return res.pipe(map((response) => response.slice(0, number)));
  }

  @POST
  @Headers({
    'someHeader3': 'headerValue3',
  })
  @Path('posts')
  public setPost(@Body post: any): Observable<any> {
    //return this.http.request('POST', 'https://jsonplaceholder.typicode.com/posts/', post);
    return null;
  }

  @PUT
  @Path('posts/:id')
  public putPost(@ResponseObservable res: Observable<any>, @Body post: any, @PathParam('id') postId: number): Observable<any> {
    //return this.http.request('PUT', 'https://jsonplaceholder.typicode.com/posts/'+id, post);
    return res.pipe(tap(data => console.log(`putPost for Post (${postId}) :`, data)));
  }

  @DELETE
  @Path('posts/:id')
  public deletePost(@PathParam('id') postId: number): Observable<any> {
    //return this.http.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/'+id);
    return null;
  }


}
