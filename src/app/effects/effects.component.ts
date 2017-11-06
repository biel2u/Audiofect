import { reverb, delay } from './../globals';
import { Component, OnInit } from '@angular/core';
import * as Pizzicato from 'pizzicato';
import * as myGlobals from '../globals';

@Component({
  selector: 'app-effects',
  templateUrl: './effects.component.html',
  styleUrls: ['./effects.component.css']
})
export class EffectsComponent implements OnInit {

  reverbOn = false;
  delayOn = false;
  flangerOn = false;
  distortionOn = false;

  constructor() { }

  ngOnInit() {
  }

  reverb() {
    if (this.reverbOn === false) {
      myGlobals.voice.addEffect(myGlobals.reverb);
      this.reverbOn = true;
    }
    else {
      myGlobals.voice.removeEffect(myGlobals.reverb);
      this.reverbOn = false;
    }
  }

  delay() {
    if (this.delayOn === false) {
      myGlobals.voice.addEffect(myGlobals.delay);
      this.delayOn = true;
    }
    else {
      myGlobals.voice.removeEffect(myGlobals.delay);
      this.delayOn = false;
    }
  }

  flanger() {
    if (this.flangerOn === false) {
      myGlobals.voice.addEffect(myGlobals.flanger);
      this.flangerOn = true;
    }
    else {
      myGlobals.voice.removeEffect(myGlobals.flanger);
      this.flangerOn = false;
    }
  }

  distortion() {
    if (this.distortionOn === false) {
      myGlobals.voice.addEffect(myGlobals.distortion);
      this.distortionOn = true;
    }
    else {
      myGlobals.voice.removeEffect(myGlobals.distortion);
      this.distortionOn = false;
    }
  }

}
