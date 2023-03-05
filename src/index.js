import InputHandler from "~/inputHandler";
import Obstacle from "~/obstacle";
import Player from "~/player";
import Bullet from "~/bullet";
import Background from "~/background";

class Game {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.canvas.width = 1000;
    this.canvas.height = 600;
    this.ctx = this.canvas.getContext("2d");

    this.keys = [];
    this.input = new InputHandler(this.keys);

    this.Background = new Background(this.canvas);
    this.Player = new Player(this.keys, this.canvas);
    this.Obstacle = new Obstacle(this.canvas);
    this.Bullet = new Bullet(this.keys, this.Player.player, this.Obstacle.obstacles);
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.Background.draw(this.ctx);
    this.Player.draw(this.ctx);
    this.Obstacle.draw(this.ctx);
    this.Bullet.draw(this.ctx);
  }

  update({ obstacleNumber = 3, deltaTime }) {
    this.Background.update();
    this.Obstacle.update(obstacleNumber);
    this.Player.update();
    this.Bullet.update(deltaTime);
  }

  checkCollision() {
    const { player } = this.Player;
    for (let obstacle of this.Obstacle.obstacles) {
      if (
        player.x + player.width > obstacle.x &&
        player.x < obstacle.x + obstacle.width &&
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

export default Game;
