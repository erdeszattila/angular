import { Component, OnInit, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Post} from "./post.model";
import {PostService} from "./posts.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  loadedPosts = [];
  isLoading = false;

  constructor(private http: HttpClient, private postsService: PostService) {}

  ngOnInit() {
    this.isLoading = true;
    this.postsService.fetchPost().subscribe(posts => {
      this.isLoading = false;
      this.loadedPosts = posts;
    });
  }

  ngOnChanges() {

  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postsService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    // Send Http request
    this.isLoading = true;
    this.postsService.fetchPost().subscribe(posts => {
      this.isLoading = false;
      this.loadedPosts = posts;
    });
  }

  onClearPosts() {
    // Send Http request
  }
}
