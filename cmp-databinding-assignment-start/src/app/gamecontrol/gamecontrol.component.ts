import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
  @Output() OddIntervalFired = new EventEmitter<number>();
  @Output() EvenIntervalFired = new EventEmitter<number>();
  eventerino;
  numberino = 1;

  constructor() { }

  ngOnInit() {
  }

  checkNumber() {
    if (this.numberino % 2 === 0) {
      this.EvenIntervalFired.emit(this.numberino); } else {
        this.OddIntervalFired.emit(this.numberino); }
    this.numberino++;
  }

  onStartingGame() {
    // const that = this;
    // this.eventerino = setInterval(function () {that.checkNumber(); }, 1000);
    this.eventerino = setInterval(() => {if (this.numberino % 2 === 0) {
      this.EvenIntervalFired.emit(this.numberino); } else {
      this.OddIntervalFired.emit(this.numberino); }
      this.numberino++; }, 1000);
  }

  onStoppingGame() {
    clearInterval(this.eventerino);
  }
}
