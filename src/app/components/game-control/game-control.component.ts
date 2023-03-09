import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {

  @Output() gameStart = new EventEmitter();
  @Output() gameEnd = new EventEmitter();
  onStart(){
    this.gameStart.emit();
  }

  onStop(){
    this.gameEnd.emit();
  }
}
