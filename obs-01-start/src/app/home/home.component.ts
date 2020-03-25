import {Component, OnDestroy, OnInit} from '@angular/core';

import {interval, Subscription, Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    /*this.firstObsSubscription = interval(1000).subscribe(
      count => {console.log(count); }
    );*/
    const customObs = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Fuck!'));
        }
        count++;
      }, 1000);
    });

    this.firstObsSubscription = customObs.subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
      alert(error.message);
    }, () => {
      confirm('We did it!');
    });
  }

  ngOnDestroy() {
    this.firstObsSubscription.unsubscribe();
  }

}
