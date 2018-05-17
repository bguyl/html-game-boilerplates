import { Button } from "../objects/Button";

export class TodoScene extends Phaser.Scene {
  private bg: Phaser.GameObjects.Image;
  private btn: Button;

  constructor() {
    super({ key: "TodoScene" });
  }

  public create(): void {
    // this.bg = this.add.image(0, 0, "background");
  }
}
