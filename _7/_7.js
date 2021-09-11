/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _7 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./_7/costumes/costume1.png", { x: 26, y: 10 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
    ];

    this.vars.x7 = 0.06540069500647952;
    this.vars.y7 = -5.871942066653464;
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
    this.vars.x7 = 0;
    this.vars.y7 = 0;
    /* TODO: Implement looks_goforwardbackwardlayers */ null;
    while (true) {
      this.vars.x7 = this.vars.x7 * this.stage.vars.sizeX;
      this.vars.y7 = this.vars.y7 * this.stage.vars.sizeY;
      this.vars.x7 +=
        (this.sprites["_6"].x - this.x) / this.stage.vars.division;
      this.vars.y7 +=
        (this.sprites["_6"].y - this.y) / this.stage.vars.division;
      this.x += this.vars.x7;
      this.y += this.vars.y7;
      this.x += 0;
      this.y += 6;
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.stage.vars.legBreak == 1) {
        this.goto(-200, -155);
      }
      yield;
    }
  }
}
