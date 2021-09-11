/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./_2/costumes/costume1.png", { x: 26, y: 10 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];

    this.vars.x2 = -7.947987446247353;
    this.vars.y2 = -5.991768922911762;
  }

  *whenGreenFlagClicked() {
    this.vars.x2 = 0;
    this.vars.y2 = 0;
    /* TODO: Implement looks_gotofrontback */ null;
    while (true) {
      this.vars.x2 = this.vars.x2 * this.stage.vars.sizeX;
      this.vars.y2 = this.vars.y2 * this.stage.vars.sizeY;
      this.vars.x2 +=
        (this.sprites["_11"].x - this.x) / this.stage.vars.division;
      this.vars.y2 +=
        (this.sprites["_11"].y - this.y) / this.stage.vars.division;
      this.x += this.vars.x2;
      this.y += this.vars.y2;
      this.x += 8;
      this.y += 6;
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.stage.vars.mode == 1) {
        this.visible = true;
      } else {
        this.visible = false;
      }
      yield;
    }
  }
}
