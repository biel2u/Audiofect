import { distortion } from './../../globals';
import { Component, OnInit } from '@angular/core';
import * as myGlobals from '../../globals';

@Component({
  selector: 'app-distortion',
  templateUrl: './distortion.component.html',
  styleUrls: ['../customization.component.css']
})
export class DistortionComponent implements OnInit {

  distortionGain: string;

  constructor() { }

  ngOnInit() {
    this.distortionGain = myGlobals.distortion.gain;
  }

  changeDistortionGain() {
    this.distortionGain = (document.getElementById("distortionGain") as HTMLInputElement).value;
    myGlobals.distortion.gain = Number(this.distortionGain);
  }

}
