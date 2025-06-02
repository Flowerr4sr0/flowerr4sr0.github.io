/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Flasher extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Flasher/costumes/costume1.svg", {
        x: 288.633955,
        y: 213.80293,
      }),
      new Costume("costume2", "./Flasher/costumes/costume2.svg", {
        x: 0,
        y: 0,
      }),
    ];

    this.sounds = [new Sound("pop", "./Flasher/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
    ];
  }

  *whenGreenFlagClicked() {
    this.moveBehind();
    while (true) {
      this.effects.ghost = 0;
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.toNumber(this.stage.vars.flasher) === 1) {
        while (!(this.toNumber(this.stage.vars.flasher) === 0)) {
          this.visible = true;
          this.moveBehind();
          this.moveBehind(9);
          this.costumeNumber++;
          this.effects.color = this.random(0, 100);
          yield;
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.toNumber(this.stage.vars.flasher) === 0) {
        this.effects.color = 0;
        this.visible = false;
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      yield* this.wait(0.7);
      this.clearPen();
      yield;
    }
  }
}
