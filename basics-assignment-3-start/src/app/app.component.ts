import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isDisabled = true;
  clicks = [];
  numberOfClicks = 0;

  setVisibility() {
    this.numberOfClicks++;
    this.clicks.push('The button was clicked ' + this.numberOfClicks + ' times');
    this.isDisabled = !this.isDisabled;
  }
}
