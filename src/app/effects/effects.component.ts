import { Component, OnInit } from '@angular/core';
import * as Pizzicato from 'pizzicato';
import * as myGlobals from '../globals';

@Component({
  selector: 'app-effects',
  templateUrl: './effects.component.html',
  styleUrls: ['./effects.component.css']
})
export class EffectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addReverb() {
    myGlobals.voice.addEffect(myGlobals.reverb);
  }

}
