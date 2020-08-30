import {Injectable} from "@angular/core";
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from "@angular/common/http";
import {Post} from "./post.model";
import { map, tap } from "rxjs/operators";


@Injectable({providedIn: 'root'})
export class PostService {
  constructor(private http: HttpClient) {}

  createAndStorePost( title: string, content: string) {
    const postData: Post = {title: title, content: content};
    return this.http
      .post<{ name: string }>(
        'https://ng-complete-guide-a8170.firebaseio.com/posts.json',
        postData,
        {
          observe: 'response'
        }
      );
  }

  fetchPost() {
    return this.http
      .get<{[key: string]: Post}>(
        'https://ng-complete-guide-a8170.firebaseio.com/posts.json',
      {
        headers: new HttpHeaders({'Custom-Header': 'hello'}),
        params: new HttpParams().set('print', 'pretty')
      })
      .pipe(
        map(responseData => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key});
            }
          }
          return postsArray;
        }));
  }

  deletePost() {
    return this.http.delete("https://ng-complete-guide-a8170.firebaseio.com/posts.json",
      {
        observe: 'events',
        responseType: 'text'
      }
      ).pipe(
          tap(event => {
            console.log(event);
            if (event.type === HttpEventType.Response) {
              console.log(event.body);
            }
            if (event.type === HttpEventType.Sent) {
              // ...
            }
    }));
  }
}
