/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _10 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./_10/costumes/costume1.png", { x: 26, y: 6 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
    ];

    this.vars.x10 = 0.07333619429635278;
    this.vars.y10 = -6.7886441737044985;
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
    this.vars.x10 = 0;
    this.vars.y10 = 0;
    /* TODO: Implement looks_goforwardbackwardlayers */ null;
    while (true) {
      this.vars.x10 = this.vars.x10 * this.stage.vars.sizeX;
      this.vars.y10 = this.vars.y10 * this.stage.vars.sizeY;
      this.vars.x10 +=
        (this.sprites["_7"].x - this.x) / this.stage.vars.division;
      this.vars.y10 +=
        (this.sprites["_7"].y - this.y) / this.stage.vars.division;
      this.x += this.vars.x10;
      this.y += this.vars.y10;
      this.x += 0;
      this.y += 7;
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
