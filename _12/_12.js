/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _12 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./_12/costumes/costume1.png", { x: 26, y: 12 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];

    this.vars.x12 = 1.037571270382689;
    this.vars.y12 = -5.0042149901132404;
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
    this.vars.x12 = 0;
    this.vars.y12 = 0;
    /* TODO: Implement looks_gotofrontback */ null;
    while (true) {
      this.vars.x12 = this.vars.x12 * this.stage.vars.sizeX;
      this.vars.y12 = this.vars.y12 * this.stage.vars.sizeY;
      this.vars.x12 +=
        (this.sprites["_9"].x - this.x) / this.stage.vars.division;
      this.vars.y12 +=
        (this.sprites["_9"].y - this.y) / this.stage.vars.division;
      this.x += this.vars.x12;
      this.y += this.vars.y12;
      this.x += -1;
      this.y += 5;
      yield;
    }
  }
}
