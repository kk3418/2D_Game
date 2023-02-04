class InputHandler {
  constructor(game) {
    this.game = game;
    window.addEventListener("keydown", (e) => {
      if (!this.game.keys.includes(e.key)) {
        switch (e.key) {
          case "ArrowUp":
          case "ArrowDown":
            this.game.keys.push(e.key);
            break;
        }
      }
      console.log(this.game.keys);
    });
    window.addEventListener("keyup", (e) => {
      if (this.game.keys.includes(e.key)) {
        this.game.keys.splice(this.game.keys.indexOf(e.key), 1);
      }
      console.log(this.game.keys);
    });
  }
}

export default InputHandler;
