class Obstacle {
  constructor() {
    this.obstacles = [];
    this.obstacleMoveSpeed = 1.5;
    this.width = 25;
    this.height = 5;
  }

  draw(ctx) {
    for (let obstacle of this.obstacles) {
      this.ctx.fillStyle = "green";
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
      this.generateObstacle(3);
    }
    if (this.obstacles.length > 3) {
      this.obstacles = [];
    }
    this.moveObstacle();
  }

  generateObstacle(n = 1) {
    for (let i = 0; i < n; i++) {
      this.obstacles.push({
        x: 150 - this.width + Math.floor(Math.random() * 50 + 1),
        y: Math.floor((Math.random() * 1000) / 7),
        width: this.width,
        height: this.height,
      });
    }
  }

  moveObstacle() {
    this.obstacles.forEach((obstacle) => {
      obstacle.x -= this.obstacleMoveSpeed;
    });
  }
}

export default Obstacle;
