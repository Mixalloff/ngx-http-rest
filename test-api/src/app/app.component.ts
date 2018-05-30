import {Component, OnInit} from '@angular/core';
import {ApiService} from "./services/api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  public post1: any;
  public post2: any;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getPost(1).subscribe((post)=>this.post1=post);
    this.api.getPost(2).subscribe((post)=>this.post2=post);
  }



  /*getPost(id: number) {
    return this.api.getPost(id);
  }*/

}
