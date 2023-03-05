import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import Game from "~/index";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

function initial() {
  const obstacleNumber = 3;
  const game = new Game();
  let lastTime = 0;

  function loop(timeStamp) {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    if (game.checkCollision()) {
      return;
    }
    game.update({ obstacleNumber, deltaTime });
    game.draw();
    requestAnimationFrame(loop);
  }

  loop();
}

function App() {
  useEffect(() => {
    initial();
  }, []);

  return (
    <>
      <canvas id="canvas" className="container"></canvas>
    </>
  );
}
