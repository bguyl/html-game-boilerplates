
export class Button extends Phaser.GameObjects.Image {
  constructor(scene: Phaser.Scene, x: number, y: number, texture: string,
              frame?: string | integer, callback?: (e: Event) => void) {
    super(scene, x, y, texture, frame);
    this.setInteractive();
    this.on("pointerdown", (event: any) => callback(event));
  }
}
