/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _6 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./_6/costumes/costume1.png", { x: 26, y: 10 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];

    this.vars.x6 = 0.05832374702658251;
    this.vars.y6 = -6.947298961777557;
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.stage.vars.mode == 1) {
        this.visible = true;
      } else {
        this.visible = false;
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.vars.x6 = 0;
    this.vars.y6 = 0;
    /* TODO: Implement looks_gotofrontback */ null;
    while (true) {
      this.vars.x6 = this.vars.x6 * this.stage.vars.sizeX;
      this.vars.y6 = this.vars.y6 * this.stage.vars.sizeY;
      this.vars.x6 +=
        (this.sprites["_2"].x - this.x) / this.stage.vars.division;
      this.vars.y6 +=
        (this.sprites["_2"].y - this.y) / this.stage.vars.division;
      this.x += this.vars.x6;
      this.y += this.vars.y6;
      this.x += 0;
      this.y += 7;
      yield;
    }
  }
}
