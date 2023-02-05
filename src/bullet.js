class Bullet {
  constructor(keys, player) {
    this.bullets = [];
    this.bulletSpeed = 1.7;
    this.keys = keys;
    this.player = player;
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
    this.bullets.forEach((bullet) => {
      bullet.x += this.bulletSpeed;
    });
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
