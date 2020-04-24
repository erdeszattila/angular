import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  wantedPage: string;

  setVisibleMenuOption(pageName: string) {
    this.wantedPage = pageName;
  }
}
