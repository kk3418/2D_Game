class Background {
  constructor(canvas) {
    this.width = canvas.width;
    this.height = canvas.height;
    this.xArray = Array.from({ length: 100 }, (v, i) => i * this.width);
    this.y = 0;
    this.backgroundMoveSpeed = 6;
    this.sky = document.getElementById("layer1");
    this.floor = document.getElementById("layer2");
  }

  draw(ctx) {
    ctx.imageSmoothingEnabled = true;
    ctx.drawImage(this.sky, 0, 0, this.width, this.height);
    this.xArray.forEach((x) => {
      ctx.drawImage(this.floor, x, this.y, this.width, this.height);
    });
  }

  update() {
    for (let i = 0; i < this.xArray.length; i++) {
      this.xArray[i] -= this.backgroundMoveSpeed;
    }
  }
}

export default Background;
