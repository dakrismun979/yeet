/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./_1/costumes/costume1.png", { x: 26, y: 12 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];

    this.vars.x = 10.023982053388995;
    this.vars.y = -1.9999793210579733;
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
    this.vars.x = 0;
    this.vars.y = 0;
    /* TODO: Implement looks_goforwardbackwardlayers */ null;
    while (true) {
      this.vars.x = this.vars.x * this.stage.vars.sizeX;
      this.vars.y = this.vars.y * this.stage.vars.sizeY;
      this.vars.x +=
        (this.sprites["Board"].x - this.x) / this.stage.vars.division;
      this.vars.y +=
        (this.sprites["Board"].y - this.y) / this.stage.vars.division;
      this.x += this.vars.x;
      this.y += this.vars.y;
      this.x += -10;
      this.y += 2;
      yield;
    }
  }
}
