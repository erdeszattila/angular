import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers = [];
  evenNumbers = [];

  onGettingEvenNumber(nr: number) {
    console.log(nr);
    this.evenNumbers.push(nr);
    }

  onGettingOddNumber(nr: number) {
    console.log(nr);
    this.oddNumbers.push(nr);
  }
}

