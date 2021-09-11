/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _8 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./_8/costumes/costume1.png", { x: 26, y: 12 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];

    this.vars.x8 = -0.9664943120548629;
    this.vars.y8 = -5.001053558350533;
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
    this.vars.x8 = 0;
    this.vars.y8 = 0;
    /* TODO: Implement looks_gotofrontback */ null;
    while (true) {
      this.vars.x8 = this.vars.x8 * this.stage.vars.sizeX;
      this.vars.y8 = this.vars.y8 * this.stage.vars.sizeY;
      this.vars.x8 +=
        (this.sprites["_4"].x - this.x) / this.stage.vars.division;
      this.vars.y8 +=
        (this.sprites["_4"].y - this.y) / this.stage.vars.division;
      this.x += this.vars.x8;
      this.y += this.vars.y8;
      this.x += 1;
      this.y += 5;
      yield;
    }
  }
}
