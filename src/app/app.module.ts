import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EffectsComponent } from './effects/effects.component';
import { PanelComponent } from './panel/panel.component';
import { ReverbComponent } from './reverb/reverb.component';

@NgModule({
  declarations: [
    AppComponent,
    EffectsComponent,
    PanelComponent,
    ReverbComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
