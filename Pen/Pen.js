/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Pen extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Pen/costumes/costume1.png", { x: 4, y: 4 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.penSize = 7;
    this.penDown = false;
    this.penColor = Color.rgb(255, 0, 189);
    while (true) {
      if (this.stage.vars.mode == 2) {
        this.clearPen();
        this.penDown = false;
        this.goto(this.sprites["_1"].x, this.sprites["_1"].y);
        this.penDown = true;
        this.goto(this.sprites["_4"].x, this.sprites["_4"].y);
        this.goto(this.sprites["_8"].x, this.sprites["_8"].y);
        this.goto(this.sprites["_11"].x, this.sprites["_11"].y);
        this.goto(this.sprites["_2"].x, this.sprites["_2"].y);
        this.goto(this.sprites["_12"].x, this.sprites["_12"].y);
        this.goto(this.sprites["_9"].x, this.sprites["_9"].y);
        this.goto(this.sprites["_5"].x, this.sprites["_5"].y);
        this.goto(this.sprites["_3"].x, this.sprites["_3"].y);
        this.penDown = false;
        this.goto(this.sprites["_2"].x, this.sprites["_2"].y);
        this.penDown = true;
        this.goto(this.sprites["_6"].x, this.sprites["_6"].y);
        this.goto(this.sprites["_7"].x, this.sprites["_7"].y);
        this.goto(this.sprites["_10"].x, this.sprites["_10"].y);
        this.goto(this.sprites["Tet"].x, this.sprites["Tet"].y);
        this.goto(this.sprites["Sprite1"].x, this.sprites["Sprite1"].y);
        this.goto(this.sprites["Sprite2"].x, this.sprites["Sprite2"].y);
        this.penDown = false;
        this.goto(this.sprites["Tet"].x, this.sprites["Tet"].y);
        this.penDown = true;
        this.goto(this.sprites["Sprite3"].x, this.sprites["Sprite3"].y);
        this.goto(this.sprites["Sprite4"].x, this.sprites["Sprite4"].y);
        /* TODO: Implement pen_setPenHueToNumber */ null;
      } else {
        this.clearPen();
      }
      yield;
    }
  }
}
