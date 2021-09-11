/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Tet extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Tet/costumes/costume1.png", { x: 20, y: 48 }),
      new Costume("costume2", "./Tet/costumes/costume2.png", { x: 42, y: 59 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.x13 = 0.09137041664412683;
    this.vars.y13 = -2.809412962848859;
  }

  *whenGreenFlagClicked() {
    this.vars.x13 = 0;
    this.vars.y13 = 0;
    /* TODO: Implement looks_gotofrontback */ null;
    this.direction = 85;
    while (true) {
      this.vars.x13 = this.vars.x13 * this.stage.vars.sizeX;
      this.vars.y13 = this.vars.y13 * this.stage.vars.sizeY;
      this.vars.x13 +=
        (this.sprites["_10"].x - this.x) / this.stage.vars.division;
      this.vars.y13 +=
        (this.sprites["_10"].y - this.y) / this.stage.vars.division;
      this.x += this.vars.x13;
      this.y += this.vars.y13;
      this.x += 0;
      this.y += 3;
      this.effects.color = this.stage.vars.color;
      if (this.stage.vars.mode == 2) {
        this.costume = "costume1";
      } else {
        this.costume = "costume2";
      }
      yield;
    }
  }
}
