/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite4/costumes/costume1.png", {
        x: 26,
        y: 12
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];

    this.vars.x17 = -7.886166907060709;
    this.vars.y17 = 3.3974412709668758;
  }

  *whenGreenFlagClicked() {
    this.direction = 87;
    this.vars.x17 = 0;
    this.vars.y17 = 0;
    /* TODO: Implement looks_gotofrontback */ null;
    while (true) {
      this.vars.x17 = this.vars.x17 * this.stage.vars.sizeX;
      this.vars.y17 = this.vars.y17 * this.stage.vars.sizeY;
      this.vars.x17 +=
        (this.sprites["Sprite3"].x - this.x) / this.stage.vars.division;
      this.vars.y17 +=
        (this.sprites["Sprite3"].y - this.y) / this.stage.vars.division;
      this.x += this.vars.x17;
      this.y += this.vars.y17;
      this.x += 8;
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
