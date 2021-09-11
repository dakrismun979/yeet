/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite2/costumes/costume1.png", {
        x: 26,
        y: 12
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];

    this.vars.x15 = 8.113833092939291;
    this.vars.y15 = 3.3974412709668758;
  }

  *whenGreenFlagClicked() {
    this.direction = 55;
    this.vars.x15 = 0;
    this.vars.y15 = 0;
    /* TODO: Implement looks_gotofrontback */ null;
    while (true) {
      this.vars.x15 = this.vars.x15 * this.stage.vars.sizeX;
      this.vars.y15 = this.vars.y15 * this.stage.vars.sizeY;
      this.vars.x15 +=
        (this.sprites["Sprite1"].x - this.x) / this.stage.vars.division;
      this.vars.y15 +=
        (this.sprites["Sprite1"].y - this.y) / this.stage.vars.division;
      this.x += this.vars.x15;
      this.y += this.vars.y15;
      this.x += -8;
      this.y += -4;
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
