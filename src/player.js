class Player {
  constructor(keys, canvas) {
    this.player = { x: 0, y: 0, width: 115, height: 75 };
    this.keys = keys;
    (this.canvas = canvas), (this.image = document.getElementById("player"));
  }

  draw(ctx) {
    ctx.imageSmoothingEnabled = true;
    ctx.drawImage(this.image, this.player.x, this.player.y, this.player.width, this.player.height);
  }

  update() {
    if (this.keys.includes("ArrowUp")) {
      this.movePlayer("up");
    } else if (this.keys.includes("ArrowDown")) {
      this.movePlayer("down");
    }
  }

  movePlayer(direction) {
    if (direction === "up" && this.player.y > 0) {
      this.player.y -= 5;
    } else if (direction === "down" && this.player.y + this.player.height < this.canvas.height) {
      this.player.y += 5;
    }
  }
}

export default Player;
