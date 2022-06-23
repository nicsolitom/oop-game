class Game {
  constructor() {
    this.player = null; // will store an instance of the class Player
  }
  start() {
    console.log("starting game...");

    this.player = new Player();
    this.attachEventListeners();
  }
  attachEventListeners() {
    document.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowRight":
          this.player.moveRight();
          break;
        case "ArrowLeft":
          this.player.moveLeft();
          break;
        case "ArrowUp":
          this.player.printPositionX();
          break;
        case "ArrowDown":
          break;
      }
    });
  }
}

class Player {
  constructor() {
    this.positionX = 45;
    this.positionY = 0;
    this.domElement = null;
    this.createDomElement();
  }
  createDomElement() {
    this.domElement = document.createElement("div");
    this.domElement.id = "player";

    this.domElement.style.position = "absolute";
    this.domElement.style.left = this.positionX + "vw";
    this.domElement.style.bottom = this.positionY + "vh";
    
    const boardElm = document.getElementById("board"); // to improve
    boardElm.appendChild(this.domElement);
  }
  moveRight() {
    this.positionX++;
    this.domElement.style.left = this.positionX + "vw";
    console.log(this.positionX);
}
moveLeft() {
    this.positionX--;
    this.domElement.style.left = this.positionX + "vw";
    console.log(this.positionX);
  }
  printPositionX() {
    console.log(this.positionX);
  }
}

const game = new Game();
game.start();
