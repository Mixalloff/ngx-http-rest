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
  public post3: any;
  public post4: any;
  public post5: any;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getPost(1).subscribe((post)=>this.post1=post);
    this.api.getPostForUserId(3, 2).subscribe((post) => {
        console.log('Post2 :', post);
      this.post2=post;

        let post3 = {...post[0], title: 'new title ', id: null};
        this.api.setPost(post3).subscribe((post)=> {
        console.log('SetPosts :', post);
        this.post3 = post;
        });


        let post4 = {...post[0], title: 'Updated post ', body: 'This is an updated Post '};
        this.api.putPost(null, post4, post4.id).subscribe((post)=> {
        console.log('updates post :', post);
        this.post4 = post;
        });

        this.api.deletePost(post[1].id).subscribe((post)=> {
        console.log('deleted post :', post);
        this.post5 = post;
        });

    }
      );
  }



  /*getPost(id: number) {
    return this.api.getPost(id);
  }*/

}
