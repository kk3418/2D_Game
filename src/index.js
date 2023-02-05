import InputHandler from "~/inputHandler";
import Obstacle from "~/obstacle";
import Player from "~/player";
import Bullet from "~/bullet";

class Game {
  constructor() {
    this.keys = [];
    this.input = new InputHandler(this.keys);
    this.Player = new Player(this.keys);
    this.Obstacle = new Obstacle();
    this.Bullet = new Bullet(this.keys, this.Player.player);
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.Player.draw(this.ctx);
    this.Obstacle.draw(this.ctx);
    this.Bullet.draw(this.ctx);
  }

  update() {
    this.Obstacle.update();
    this.Player.update();
    this.Bullet.update();
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
