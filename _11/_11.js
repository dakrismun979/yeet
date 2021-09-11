/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _11 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./_11/costumes/costume1.png", { x: 26, y: 12 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];

    this.vars.x11 = -0.9582541441252734;
    this.vars.y11 = -5.006919541231465;
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
    this.vars.x11 = 0;
    this.vars.y11 = 0;
    /* TODO: Implement looks_gotofrontback */ null;
    while (true) {
      this.vars.x11 = this.vars.x11 * this.stage.vars.sizeX;
      this.vars.y11 = this.vars.y11 * this.stage.vars.sizeY;
      this.vars.x11 +=
        (this.sprites["_8"].x - this.x) / this.stage.vars.division;
      this.vars.y11 +=
        (this.sprites["_8"].y - this.y) / this.stage.vars.division;
      this.x += this.vars.x11;
      this.y += this.vars.y11;
      this.x += 1;
      this.y += 5;
      yield;
    }
  }
}
