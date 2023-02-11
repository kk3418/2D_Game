class Bullet {
  constructor(keys, player, obstacles) {
    this.bullets = [];
    this.bulletSpeed = 1.7;
    this.keys = keys;
    this.player = player;
    this.obstacles = obstacles;
    this.maxUpdateTime = 350;
    this.updateTime = 0;
  }

  draw(ctx) {
    ctx.fillStyle = "black";
    this.bullets.forEach((bullet) => {
      ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
    });
  }

  update(deltaTime) {
    this.shootBullet(deltaTime);
    this.shutdown();
    this.bullets.forEach((bullet) => {
      bullet.x += this.bulletSpeed;
    });
  }

  shutdown() {
    let deleteTarget;
    for (let i = 0; i < this.bullets.length; i++) {
      for (let j = 0; j < this.obstacles.length; j++) {
        const horizontal = this.bullets[i].x + this.bullets[i].width > this.obstacles[j].x;
        const bulletY = this.bullets[i].y + this.bullets[i].height;
        const lowerBound = this.obstacles[j].y + this.obstacles[j].height + this.player.height / 3;
        const upperBound = this.obstacles[j].y - this.player.height / 3;
        const vertical = upperBound < bulletY && bulletY < lowerBound;

        if (horizontal && vertical) {
          deleteTarget = { i, j };
          break;
        }
      }
      if (deleteTarget) {
        break;
      }
    }
    if (deleteTarget) {
      this.bullets.splice(deleteTarget.i, 1);
      this.obstacles.splice(deleteTarget.j, 1);
    }
  }

  shootBullet(deltaTime) {
    if (this.keys.includes("Space")) {
      if (this.updateTime < this.maxUpdateTime) {
        this.updateTime += deltaTime;
      } else {
        this.generateBullet();
        this.updateTime = 0;
      }
    }
  }

  generateBullet() {
    const bullet = {
      width: 30,
      height: 5,
      x: this.player.x + this.player.width,
      y: this.player.y + this.player.height / 2,
    };
    this.bullets.push(bullet);
    console.log("bullets status (when shootBullet triggered)", this.bullets);
  }
}

export default Bullet;
