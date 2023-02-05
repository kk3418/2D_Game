class InputHandler {
  constructor(keys) {
    this.keys = keys;
    window.addEventListener("keydown", (e) => {
      if (!this.keys.includes(e.code)) {
        switch (e.code) {
          case "ArrowUp":
          case "ArrowDown":
          case "Space":
            this.keys.push(e.code);
            break;
        }
      }
      console.log(this.keys);
    });
    window.addEventListener("keyup", (e) => {
      if (this.keys.includes(e.code)) {
        this.keys.splice(this.keys.indexOf(e.code), 1);
      }
      console.log(this.keys);
    });
  }
}

export default InputHandler;
