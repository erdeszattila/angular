import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

isVisible = false;
numberofClicks = 0;
clickArray = [];


clickFunc() {
  this.isVisible = !this.isVisible;
  this.numberofClicks++;
  this.clickArray.push(this.numberofClicks);
}

}
