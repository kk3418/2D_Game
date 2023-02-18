class Obstacle {
  constructor() {
    this.obstacles = [];
    this.obstacleMoveSpeed = 5;
    this.width = 125;
    this.height = 25;
  }

  draw(ctx) {
    ctx.fillStyle = "green";
    this.obstacles.forEach((obstacle) => {
      ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    });
  }

  update(n) {
    let deleteIndex;

    for (let i = 0; i < this.obstacles.length; i++) {
      if (this.obstacles[i].x + this.obstacles[i].width < 0) {
        deleteIndex = i;
      }
    }

    if (deleteIndex) {
      this.obstacles.splice(deleteIndex, 1);
    }

    if (this.obstacles.length < n) {
      this.generateObstacle(n);
    }

    this.moveObstacle();
  }

  generateObstacle(n = 1) {
    for (let i = 0; i < n; i++) {
      this.obstacles.push({
        x: 500,
        y: Math.floor(Math.random() * (500 - this.height)),
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
