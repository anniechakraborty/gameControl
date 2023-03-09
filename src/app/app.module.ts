import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { GameControlComponent } from './components/game-control/game-control.component';
import { AppComponent } from './app.component';
import { OddNumbersComponent } from './components/odd-numbers/odd-numbers.component';
import { EvenNumbersComponent } from './components/even-numbers/even-numbers.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    OddNumbersComponent,
    EvenNumbersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
