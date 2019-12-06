import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';

  onResetName(event: Event) {
    this.username = '';
  }

  isItEmpty() {
    return this.username.length === 0;
  }
}
