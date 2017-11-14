import { Component, OnInit } from '@angular/core';
import * as myGlobals from '../../globals';

@Component({
  selector: 'app-delay',
  templateUrl: './delay.component.html',
  styleUrls: ['../customization.component.css']
})
export class DelayComponent implements OnInit {

  delayTime: string;
  delayFeedback: string;
  delayMix: string;

  constructor() { }

  ngOnInit() {
    this.delayTime = myGlobals.delay.time;
    this.delayFeedback = myGlobals.delay.feedback;
    this.delayMix = myGlobals.delay.mix;
  }

  changeDelayTime() {
    this.delayTime = (document.getElementById("delayTime") as HTMLInputElement).value;
    myGlobals.delay.time = Number(this.delayTime);
  }

  changeDelayFeedback() {
    this.delayFeedback = (document.getElementById("delayFeedback") as HTMLInputElement).value;
    myGlobals.delay.feedback = Number(this.delayFeedback);
  }

  changeDelayMix() {
    this.delayMix = (document.getElementById("delayMix") as HTMLInputElement).value;
    myGlobals.delay.mix = Number(this.delayMix);
  }
}
