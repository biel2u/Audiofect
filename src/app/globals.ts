import * as Pizzicato from 'pizzicato';

'use strict';
//let reverbTime = document.getElementById("reverbTime");

export const voice: Pizzicato =  new Pizzicato.Sound({
    source: 'input',
    options: { volume: 0.8 }
  });

export const reverb: Pizzicato = new Pizzicato.Effects.Reverb({
    time: 2,
    decay: 3,
    reverse: false,
    mix: 0.5
});

export const delay: Pizzicato = new Pizzicato.Effects.Delay({
    feedback: 0.2,
    time: 0.52,
    mix: 0.75
});

export const flanger: Pizzicato = new Pizzicato.Effects.Flanger({
    time: 0.95,
    speed: 1,
    depth: 0.8,
    feedback: 0.7,
    mix: 0.7
});

export const distortion: Pizzicato = new Pizzicato.Effects.Distortion({
    gain: 0.4
});