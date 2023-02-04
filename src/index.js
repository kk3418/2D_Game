import InputHandler from "~/inputHandler";
import Obstacle from "~/obstacle";
import Player from "~/player";

class Game {
  constructor() {
    this.keys = [];
    this.input = new InputHandler(this);
    this.Player = new Player(this);
    this.Obstacle = new Obstacle();
    this.bullet = { x: 0, y: 0, width: 30, height: 5 };
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(this.bullet.x, this.bullet.y, this.bullet.width, this.bullet.height);
    this.Player.draw(this.ctx);
    this.Obstacle.draw(this.ctx);
  }

  update() {
    this.Obstacle.update();
    this.Player.update();
  }

  shootBullet() {
    this.bullet.x += 10;
  }

  checkCollision() {
    const { player } = this.Player;
    for (let obstacle of this.Obstacle.obstacles) {
      if (
        player.x + player.width > obstacle.x &&
        player.x < player.x + obstacle.width &&
        player.y + player.height > obstacle.y &&
        player.y < obstacle.y + obstacle.height
      ) {
        console.log("Collision detected!");
        return true;
      }
    }
    return false;
  }
}

const game = new Game();
game.Obstacle.generateObstacle(3);

function loop() {
  if (game.checkCollision()) {
    return;
  }
  game.update();
  game.draw();
  requestAnimationFrame(loop);
}

loop();
