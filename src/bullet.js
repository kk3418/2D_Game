class Bullet {
  constructor(keys, player, obstacles) {
    this.bullets = [];
    this.bulletSpeed = 1.7;
    this.keys = keys;
    this.player = player;
    this.obstacles = obstacles;
  }

  draw(ctx) {
    ctx.fillStyle = "black";
    this.bullets.forEach((bullet) => {
      ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
    });
  }

  update() {
    if (this.keys.includes("Space")) {
      // TODO: need debounce
      this.shootBullet();
    }
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
        const vertical =
          this.obstacles[j].y <
          this.bullets[i].y + this.bullets[i].height <
          this.obstacles[j].y + this.obstacles[j].height;
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

  shootBullet() {
    const bullet = {
      width: 30,
      height: 5,
      x: this.player.x + this.player.width,
      y: this.player.y + this.player.height / 2,
    };
    this.bullets.push(bullet);
  }
}

export default Bullet;
