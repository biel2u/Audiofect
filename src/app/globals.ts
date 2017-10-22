import * as Pizzicato from 'pizzicato';

'use strict';

export const voice: Pizzicato =  new Pizzicato.Sound({
    source: 'input',
    options: { volume: 0.8 }
  });

export const reverb: Pizzicato = new Pizzicato.Effects.Reverb({
    time: 1,
    decay: 0.8,
    reverse: true,
    mix: 0.5
});