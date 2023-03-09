import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-even-numbers',
  templateUrl: './even-numbers.component.html',
  styleUrls: ['./even-numbers.component.css']
})
export class EvenNumbersComponent {
  @Input() numberEmitted : number;
  constructor(){
    this.numberEmitted = 0;
  }
}
