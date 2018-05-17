import "phaser";
import { BootScene } from "./scenes/BootScene";
import { TodoScene } from "./scenes/TodoScene";

const defaultConfig = {
  input: {
    gamepad: true,
    keyboard: true,
    mouse: true,
    touch: true,
  },
  parent: "game",
  scene: [BootScene, TodoScene],
  title: "Game1",
  type: Phaser.AUTO,
};

export class Game1 extends Phaser.Game {

  public game: Phaser.Game;

  constructor(config?: GameConfig) {
    if (!config) {
      config = defaultConfig;
      config.width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
      config.height = (window.innerHeight > 0) ? window.innerHeight : screen.height;
    }
    super(config);
  }
}
