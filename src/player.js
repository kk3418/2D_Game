class Player {
  constructor() {
    this.player = { x: 0, y: 0, width: 15, height: 30 };
  }

  movePlayer(direction) {
    if (direction === "up") {
      this.player.y -= 10;
    } else if (direction === "down") {
      this.player.y += 10;
    }
  }
}

export default Player;
