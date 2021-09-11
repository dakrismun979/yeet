/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("background1", "./Stage/costumes/background1.svg", {
        x: 234.42340791738377,
        y: -94.95696128543187
      })
    ];

    this.sounds = [
      new Sound("348214_Win_the_R", "./Stage/sounds/348214_Win_the_R.wav")
    ];

    this.triggers = [];

    this.vars.mode = 2;
    this.vars.sizeX = 0.05;
    this.vars.sizeY = 0.19;
    this.vars.t = 360;
    this.vars.division = 2.09;
    this.vars.color = 175;
    this.vars.legBreak = 0;
  }
}
