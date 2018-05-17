// import * as background from "../assets/background.jpg";

export class BootScene extends Phaser.Scene {

  constructor() {
    super({ key: "BootScene" });
  }

  public preload(): void {
    // this.load.image("background", background);
  }

  public update(): void {
    this.scene.start("TodoScene");
  }
}
