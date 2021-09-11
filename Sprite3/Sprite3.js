/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite3/costumes/costume1.png", {
        x: 26,
        y: 12
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
    ];

    this.vars.x16 = -11.908629583355879;
    this.vars.y16 = 3.190587037151146;
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
    this.direction = 135;
    this.vars.x16 = 0;
    this.vars.y16 = 0;
    /* TODO: Implement looks_gotofrontback */ null;
    while (true) {
      this.vars.x16 = this.vars.x16 * this.stage.vars.sizeX;
      this.vars.y16 = this.vars.y16 * this.stage.vars.sizeY;
      this.vars.x16 +=
        (this.sprites["_10"].x - this.x) / this.stage.vars.division;
      this.vars.y16 +=
        (this.sprites["_10"].y - this.y) / this.stage.vars.division;
      this.x += this.vars.x16;
      this.y += this.vars.y16;
      this.x += 12;
      this.y += -3;
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
