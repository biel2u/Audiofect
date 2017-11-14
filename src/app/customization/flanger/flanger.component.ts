import { Component, OnInit } from '@angular/core';
import * as myGlobals from '../../globals';


@Component({
  selector: 'app-flanger',
  templateUrl: './flanger.component.html',
  styleUrls: ['../customization.component.css']
})
export class FlangerComponent implements OnInit {

  flangerTime: string;
  flangerSpeed: string;
  flangerMix: string;
  flangerDepth: string;
  flangerFeedback: string;

  constructor() { }

  ngOnInit() {
    this.flangerTime = myGlobals.flanger.time;
    this.flangerSpeed = myGlobals.flanger.speed;
    this.flangerMix = myGlobals.flanger.mix;
    this.flangerDepth = myGlobals.flanger.depth;
    this.flangerFeedback = myGlobals.flanger.feedback;
  }

  changeFlangerTime() {
    this.flangerTime = (document.getElementById("flangerTime") as HTMLInputElement).value;
    myGlobals.flanger.time = Number(this.flangerTime);
  }

  changeFlangerSpeed() {
    this.flangerSpeed = (document.getElementById("flangerSpeed") as HTMLInputElement).value;
    myGlobals.flanger.speed = Number(this.flangerSpeed);
  }

  changeFlangerMix() {
    this.flangerMix = (document.getElementById("flangerMix") as HTMLInputElement).value;
    myGlobals.flanger.mix = Number(this.flangerMix);
  }

  changeFlangerDepth() {
    this.flangerDepth = (document.getElementById("flangerDepth") as HTMLInputElement).value;
    myGlobals.flanger.depth = Number(this.flangerDepth);
  }

  changeFlangerFeedback() {
    this.flangerFeedback = (document.getElementById("flangerFeedback") as HTMLInputElement).value;
    myGlobals.flanger.feedback = Number(this.flangerFeedback);
  }
}
