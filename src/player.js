class Player {
  constructor(keys) {
    this.player = { x: 0, y: 0, width: 15, height: 30 };
    this.keys = keys;
  }

  draw(ctx) {
    ctx.fillStyle = "red";
    ctx.fillRect(this.player.x, this.player.y, this.player.width, this.player.height);
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
      this.player.y -= 1;
    } else if (direction === "down" && this.player.y + this.player.height < 145) {
      this.player.y += 1;
    }
  }
}

export default Player;
