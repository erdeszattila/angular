import {Component, OnDestroy, OnInit} from '@angular/core';

import {interval, Subscription, Observable} from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObservable: Subscription;

  constructor() { }

  ngOnInit() {
    // this.firstObservable = interval.subscribe(
    //   count => {console.log(count);
    //   });
    const customObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if(count === 2) {
          observer.complete();}
        if(count > 3) {
          observer.error(new Error('YIKES!'));
        }
        count++;
      }, 1000);
    });


    this.firstObservable = customObservable.pipe(filter(data => {
      return (data+1)%2 == 0;
    }), map(data => {
      return 'Round: ' + (data + 1);
      })).subscribe(data => {
      console.log(data);
    }, error => {
      alert(error.message);
    }, () => {
      console.log('YAY!');
    });
}

  ngOnDestroy() {
    this.firstObservable.unsubscribe();
  }

}
