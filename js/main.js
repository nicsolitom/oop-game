class Game {
  constructor() {
    this.time = 0;
    this.player = null; // will store an instance of the class Player
    this.obstaclesArr = []; // will store instances of the class Obstacles
  }
  start() {
    this.player = new Player();
    this.attachEventListeners();

    setInterval(() => {
      if (this.time % 60 === 0) {
        const newObstacle = new Obstacle();
        this.obstaclesArr.push(newObstacle);
      }
      this.obstaclesArr.forEach((obstacle) => {
        obstacle.moveDown();
      });

      // Trying to delete obstacles:

      // this.obstaclesArr.forEach((obstacle) => {
      //   if(obstacle.style.bottom <= -10) {
      //     let index = this.obstaclesArr.indexOf(obstacle);
      //     this.obstaclesArr.splice(index, 1);
      //   }
      // })

      this.time++;
    }, 50);

    setInterval(() => {
      this.obstaclesArr.forEach((obstacleInstance) => {
        if (
          this.player.positionX <
            obstacleInstance.positionX + obstacleInstance.width &&
          this.player.positionX + this.player.width >
            obstacleInstance.positionX &&
          this.player.positionY <
            obstacleInstance.positionY + obstacleInstance.height &&
          this.player.height + this.player.positionY >
            obstacleInstance.positionY
        ) {
          console.log("collision detected");
        }
      }, 50);
    });
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
          // this.player.moveUp()
          break;
        case "ArrowDown":
          // this.player.moveDown()
          break;
      }
    });
  }
}

class Player {
  constructor() {
    this.positionX = 45;
    this.positionY = 0;
    this.height = 10;
    this.width = 10;
    this.domElement = null;
    this.createDomElement();
  }
  createDomElement() {
    this.domElement = document.createElement("div");
    this.domElement.id = "player";

    this.domElement.style.position = "absolute";
    this.domElement.style.left = this.positionX + "vw";
    this.domElement.style.bottom = this.positionY + "vh";
    this.domElement.style.width = this.width + "vw";
    this.domElement.style.height = this.height + "vh";

    const boardElm = document.getElementById("board"); // to improve
    boardElm.appendChild(this.domElement);
  }
  moveRight() {
    if(this.positionX < 90) {
    this.positionX += 3;
    this.domElement.style.left = this.positionX + "vw";
    }
  }
  moveLeft() {
    if(this.positionX > 0) {
      this.positionX -= 3;
      this.domElement.style.left = this.positionX + "vw";
    }
  }
  // moveUp() {
  //   if(this.positionY < 90) {
  //   this.positionY += 3;
  //   this.domElement.style.bottom = this.positionY + "vh";
  //   }
  // }
  // moveDown() {
  //   if(this.positionY > 0) {
  //     this.positionY -= 3;
  //     this.domElement.style.bottom = this.positionY + "vh";
  //   }
  // }

}

class Obstacle {
  constructor() {
    let random = Math.floor(Math.random() * (90 - 0)) + 0;
    this.positionX = random;
    this.positionY = 90;
    this.width = 10;
    this.height = 10;
    this.domElement = null;
    this.createDomElement();
  }
  createDomElement() {
    this.domElement = document.createElement("div");
    this.domElement.className = "obstacle";

    this.domElement.style.position = "absolute";
    this.domElement.style.left = this.positionX + "vw";
    this.domElement.style.bottom = this.positionY + "vh";
    this.domElement.style.width = this.width + "vw";
    this.domElement.style.height = this.height + "vh";

    const boardElm = document.getElementById("board"); // to improve
    boardElm.appendChild(this.domElement);
  }
  moveDown() {
    this.positionY--;
    this.domElement.style.bottom = this.positionY + "vh";
  }
}

const game = new Game();
game.start();
