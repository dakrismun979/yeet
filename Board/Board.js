/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Board extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Board/costumes/costume1.png", { x: 68, y: 8 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.KEY_PRESSED, { key: "r" }, this.whenKeyRPressed)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(52, 14);
    this.stage.vars.mode = 2;
    while (true) {
      this.goto(this.sprites["Sprite5"].x, this.sprites["Sprite5"].y);
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.keyPressed("w") || 0) {
        if (this.stage.vars.sizeY < 0.7) {
          this.stage.vars.sizeY += 0.1;
        }
      }
      if (null || this.keyPressed("s")) {
        if (this.stage.vars.sizeY > -0.7) {
          this.stage.vars.sizeY += -0.1;
        }
      }
      if (null || this.keyPressed("a")) {
        if (this.stage.vars.sizeX > -0.7) {
          this.stage.vars.sizeX += -0.1;
        }
      }
      if (null || this.keyPressed("d")) {
        if (this.stage.vars.sizeX < 0.7) {
          this.stage.vars.sizeX += 0.1;
        }
      }
      yield* this.wait(0.05);
      yield;
    }
  }

  *whenKeyRPressed() {
    this.stage.vars.sizeX = 0.05;
    this.stage.vars.sizeY = 0.19;
    this.stage.vars.division = 2.09;
  }
}
