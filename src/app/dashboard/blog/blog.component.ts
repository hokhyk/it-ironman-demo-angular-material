import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  progress = 60;
  strokeWidth = 1;
  diameter = 100;
  posts$: Observable<any>;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.posts$ = this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/posts').map(posts => {
      return posts.slice(0, 6);
    }).delay(1500);
  }
}
