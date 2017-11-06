import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EffectsComponent } from './effects/effects.component';
import { PanelComponent } from './panel/panel.component';
import { ReverbComponent } from './customization/reverb/reverb.component';
import { RouterModule, Routes } from '@angular/router';
import { DelayComponent } from './customization/delay/delay.component';
import { FlangerComponent } from './customization/flanger/flanger.component';
import { DistortionComponent } from './customization/distortion/distortion.component';

@NgModule({
  declarations: [
    AppComponent,
    EffectsComponent,
    PanelComponent,
    ReverbComponent,
    DelayComponent,
    FlangerComponent,
    DistortionComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
