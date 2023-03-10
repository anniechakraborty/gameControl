import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string;
  numbersGenerated;
  private interval;

  constructor(){
    this.title = 'Game Control';
    this.numbersGenerated = new Array();
  }

  onGameStart(){
    console.log('onGameStart');
    this.interval = setInterval(()=>{
      this.numbersGenerated.push(Math.floor((Math.random() * 1000) + 1));
    }, 1000);
  }

  onGameEnd(){
    console.log('onGameEnd');
    console.log(this.numbersGenerated);
    clearInterval(this.interval);
  }
}
