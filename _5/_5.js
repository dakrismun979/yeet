/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _5 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./_5/costumes/costume1.png", { x: 26, y: 12 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];

    this.vars.x5 = 1.0298800415995542;
    this.vars.y5 = -5.000023324228447;
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
    this.vars.x5 = 0;
    this.vars.y5 = 0;
    /* TODO: Implement looks_gotofrontback */ null;
    while (true) {
      this.vars.x5 = this.vars.x5 * this.stage.vars.sizeX;
      this.vars.y5 = this.vars.y5 * this.stage.vars.sizeY;
      this.vars.x5 +=
        (this.sprites["_3"].x - this.x) / this.stage.vars.division;
      this.vars.y5 +=
        (this.sprites["_3"].y - this.y) / this.stage.vars.division;
      this.x += this.vars.x5;
      this.y += this.vars.y5;
      this.x += -1;
      this.y += 5;
      yield;
    }
  }
}
