import { Component, OnInit } from '@angular/core';
import * as myGlobals from '../../globals';

@Component({
  selector: 'app-reverb',
  templateUrl: './reverb.component.html',
  styleUrls: ['../customization.component.css']
})
export class ReverbComponent implements OnInit {

  reverbTime: string;
  reverbDecay: string;
  reverbMix: string;
  reverbReverse = false;

  constructor() { }

  ngOnInit() {
    this.reverbTime = myGlobals.reverb.time;
    this.reverbDecay = myGlobals.reverb.decay;
    this.reverbMix = myGlobals.reverb.mix
  }

  changeReverbTime() {
    this.reverbTime = (document.getElementById("reverbTime") as HTMLInputElement).value;
    myGlobals.reverb.time = Number(this.reverbTime);
  }

  changeReverbDecay() {
    this.reverbDecay = (document.getElementById("reverbDecay") as HTMLInputElement).value;
    myGlobals.reverb.decay = Number(this.reverbDecay);
  }

  changeReverbMix() {
    this.reverbMix = (document.getElementById("reverbMix") as HTMLInputElement).value;
    myGlobals.reverb.mix = Number(this.reverbMix);
  }

  changeReverbReverse(){
    if(myGlobals.reverb.reverse) {
      myGlobals.reverb.reverse = false;
    }
    else {
      myGlobals.reverb.reverse = true;
    }
  }

}
