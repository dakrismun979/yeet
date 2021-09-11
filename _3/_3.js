/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./_3/costumes/costume1.png", { x: 26, y: 12 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
    ];

    this.vars.x3 = -9.973353274012242;
    this.vars.y3 = -1.9999661538080553;
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
    this.vars.x3 = 0;
    this.vars.y3 = 0;
    /* TODO: Implement looks_gotofrontback */ null;
    while (true) {
      this.vars.x3 = this.vars.x3 * this.stage.vars.sizeX;
      this.vars.y3 = this.vars.y3 * this.stage.vars.sizeY;
      this.vars.x3 +=
        (this.sprites["Board"].x - this.x) / this.stage.vars.division;
      this.vars.y3 +=
        (this.sprites["Board"].y - this.y) / this.stage.vars.division;
      this.x += this.vars.x3;
      this.y += this.vars.y3;
      this.x += 10;
      this.y += 2;
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
