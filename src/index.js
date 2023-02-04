import InputHandler from "~/inputHandler";

class Game {
  constructor() {
    this.player = { x: 0, y: 0, width: 15, height: 30 };
    this.bullet = { x: 0, y: 0, width: 30, height: 5 };
    this.obstacles = [];
    this.obstacleMoveSpeed = 1.5;
    this.keys = [];
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.input = new InputHandler(this);
  }

  draw(ctx) {
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.fillStyle = "red";
    ctx.fillRect(this.player.x, this.player.y, this.player.width, this.player.height);
    ctx.fillStyle = "black";
    ctx.fillRect(this.bullet.x, this.bullet.y, this.bullet.width, this.bullet.height);
    for (let obstacle of this.obstacles) {
      ctx.fillStyle = "green";
      ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    }
  }

  update() {
    let min = 0;
    this.obstacles.forEach((obstacle) => {
      if (obstacle.x + 25 > min) {
        min = obstacle.x + 25;
      }
    });
    if (min <= 0) {
      this.generateObstacle();
      this.generateObstacle();
      this.generateObstacle();
    }
    if (this.obstacles.length > 3) {
      this.obstacles = [];
    }
    if (this.keys.includes("ArrowUp")) {
      this.movePlayer("up");
    } else if (this.keys.includes("ArrowDown")) {
      this.movePlayer("down");
    }
    this.moveObstacle();
  }

  movePlayer(direction) {
    if (direction === "up") {
      this.player.y -= 1;
    } else if (direction === "down") {
      this.player.y += 1;
    }
  }

  shootBullet() {
    this.bullet.x += 10;
  }

  generateObstacle() {
    let obstacle = {
      x: 125 + Math.floor(Math.random() * 50 + 1),
      y: Math.floor((Math.random() * 1000) / 7),
      width: 25,
      height: 5,
    };
    this.obstacles.push(obstacle);
  }

  moveObstacle() {
    this.obstacles.forEach((obstacle) => {
      obstacle.x -= this.obstacleMoveSpeed;
    });
  }

  checkCollision() {
    for (let obstacle of this.obstacles) {
      if (
        this.player.x + this.player.width > obstacle.x &&
        this.player.x < this.player.x + obstacle.width &&
        this.player.y + this.player.height > obstacle.y &&
        this.player.y < obstacle.y + obstacle.height
      ) {
        console.log("Collision detected!");
        return true;
      }
    }
    return false;
  }
}

const game = new Game();
game.generateObstacle();
game.generateObstacle();
game.generateObstacle();

function loop() {
  if (game.checkCollision()) {
    return;
  }
  game.update();
  game.draw(game.ctx);
  requestAnimationFrame(loop);
}

loop();
