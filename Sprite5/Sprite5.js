/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite5 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite5/costumes/costume1.png", {
        x: 2,
        y: -3
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite5/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked6),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked7),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked8),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked9),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked10)
    ];

    this.vars.yv = 0;
    this.vars.xv = 0.02138695835253582;
  }

  *whenGreenFlagClicked() {
    this.size = 205;
    while (true) {
      if (!(this.keyPressed("left arrow") || this.keyPressed("right arrow"))) {
        this.costume = "costume1";
      }
      this.effects.ghost = 100;
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.touching(Color.rgb(0, 255, 255))) {
        this.vars.yv += 0.5;
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.touching(Color.rgb(255, 0, 0))) {
        for (let i = 0; i < 20; i++) {
          this.effects.ghost += 5;
          yield;
        }
        this.goto(-219, -85);
        for (let i = 0; i < 20; i++) {
          this.effects.ghost += -5;
          yield;
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      if (this.touching(Color.rgb(0, 255, 255))) {
        if (this.keyPressed("right arrow")) {
          this.vars.xv += 0.2;
        }
        if (this.keyPressed("left arrow")) {
          this.vars.xv += -0.2;
        }
        if (this.keyPressed("down arrow")) {
          this.vars.yv = -1;
        }
        if (this.keyPressed("up arrow")) {
          this.vars.yv = 1.7;
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked5() {
    while (true) {
      if (this.touching(Color.rgb(0, 255, 255))) {
        if (this.keyPressed("down arrow")) {
          this.costume = "costume1";
        }
        if (this.keyPressed("up arrow")) {
          this.costume = "costume3";
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked6() {
    while (true) {
      if (this.vars.yv > 2) {
        this.costume = "costume3";
      }
      yield;
    }
  }

  *whenGreenFlagClicked7() {
    this.goto(-219, -85);
    while (true) {
      this.vars.yv += -0.5;
      if (
        !(
          this.touching(Color.rgb(255, 0, 0)) ||
          this.touching(Color.rgb(0, 255, 255))
        )
      ) {
        if (this.keyPressed("right arrow")) {
          this.direction = 90;
          this.vars.xv += 0.7;
        }
        if (this.keyPressed("left arrow")) {
          this.direction = -90;
          this.vars.xv += -0.7;
        }
      }
      this.vars.xv = this.vars.xv * 0.9;
      this.x += this.vars.xv;
      if (this.touching(Color.rgb(0, 0, 0))) {
        this.y += 1;
        if (this.touching(Color.rgb(0, 0, 0))) {
          this.y += 1;
          if (this.touching(Color.rgb(0, 0, 0))) {
            this.y += 1;
            if (this.touching(Color.rgb(0, 0, 0))) {
              this.y += 1;
              if (this.touching(Color.rgb(0, 0, 0))) {
                this.y += 1;
                if (this.touching(Color.rgb(0, 0, 0))) {
                  this.x += this.vars.xv * -1;
                  this.x += -1;
                  this.y += -5;
                  this.x += 1;
                  if (this.keyPressed("space")) {
                    if (this.vars.xv > 0) {
                      this.vars.xv = -8;
                    } else {
                      this.vars.xv = 8;
                    }
                    this.vars.yv = 10;
                  } else {
                    this.vars.xv = 0;
                  }
                }
              }
            }
          }
        }
      }
      this.y += this.vars.yv;
      if (this.touching(Color.rgb(0, 0, 0))) {
        this.y += this.vars.yv * -1;
        this.vars.yv = 0;
      }
      this.y += -1;
      if (this.touching(Color.rgb(0, 0, 0))) {
        if (this.keyPressed("space")) {
          if (!this.touching(Color.rgb(0, 255, 255))) {
            this.vars.yv = 11;
          }
        }
      }
      this.y += 1;
      yield;
    }
  }

  *whenGreenFlagClicked8() {
    while (true) {
      if (this.keyPressed("right arrow")) {
        this.direction = 90;
        if (!(this.keyPressed("space") || this.keyPressed("up arrow"))) {
          this.costume = "costume2";
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked9() {
    while (true) {
      if (this.keyPressed("left arrow")) {
        this.direction = -90;
        if (!(this.keyPressed("space") || this.keyPressed("up arrow"))) {
          this.costume = "costume2";
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked10() {
    while (true) {
      if (this.touching(this.sprites[undefined].andClones()) && 182 < this.x) {
        this.broadcast("next level");
        this.goto(-217, -130);
      }
      yield;
    }
  }
}
