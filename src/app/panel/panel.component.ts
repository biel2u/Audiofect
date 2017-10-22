import { Component, OnInit, Injectable } from '@angular/core';
import * as Pizzicato from 'pizzicato';
import * as myGlobals from '../globals';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})

@Injectable()
export class PanelComponent implements OnInit {

  
  disabledStop: boolean = true;
  disabledPlay: boolean;

  constructor() { }

  ngOnInit() {
  }

  play() {
      myGlobals.voice.play();
  }

  stop() {
    myGlobals.voice.stop();
  }

  disableStop() {
    this.disabledPlay = false;
    return this.disabledStop = true;
  }

  disablePlay() {
    this.disabledStop = false;
    return this.disabledPlay = true;
  }
}
