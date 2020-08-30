import { Component, OnInit } from '@angular/core';
import {Post} from "./post.model";
import {PostService} from "./posts.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];
  isLoading = false;
  isFailed = false;
  errorMsg;

  constructor(private postsService: PostService) {}

  ngOnInit() {
    this.onFetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postsService.createAndStorePost(postData.title, postData.content).
      subscribe(
        responseData => {
          console.log(responseData);
          this.onFetchPosts();
        }
    );
  }

  onFetchPosts() {
    // Send Http request
    this.isLoading = true;
    this.postsService.fetchPost().subscribe(posts => {
      this.isLoading = false;
      this.isFailed = false;
      this.loadedPosts = posts;
    }, error => {
      this.isFailed = true;
      this.errorMsg = error.message;
      console.log(error);
    });
  }

  onClearPosts() {
    // Send Http request
    this.postsService.deletePost().subscribe(
      () => {
        this.onFetchPosts();
      }
    );
  }
}
