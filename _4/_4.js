/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./_4/costumes/costume1.png", { x: 26, y: 12 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];

    this.vars.x4 = -0.9701199584004481;
    this.vars.y4 = -5.000023324228447;
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
    this.vars.x4 = 0;
    this.vars.y4 = 0;
    /* TODO: Implement looks_gotofrontback */ null;
    while (true) {
      this.vars.x4 = this.vars.x4 * this.stage.vars.sizeX;
      this.vars.y4 = this.vars.y4 * this.stage.vars.sizeY;
      this.vars.x4 +=
        (this.sprites["_1"].x - this.x) / this.stage.vars.division;
      this.vars.y4 +=
        (this.sprites["_1"].y - this.y) / this.stage.vars.division;
      this.x += this.vars.x4;
      this.y += this.vars.y4;
      this.x += 1;
      this.y += 5;
      yield;
    }
  }
}
