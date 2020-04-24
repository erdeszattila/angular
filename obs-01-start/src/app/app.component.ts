import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivateService} from "./activate.service";
import {Subscription} from "rxjs/index";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  isActivated = false;
  sub: Subscription;

  constructor(private activateService: ActivateService) {}

  ngOnInit() {
    this.sub = this.activateService.activatedEmitter.subscribe(data => {
      this.isActivated = data;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
