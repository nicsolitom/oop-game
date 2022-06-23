class Game {
  constructor() {
    this.time = 0;
    this.player = null; // will store an instance of the class Player
    this.obstaclesArr = []; // will store instances of the class Obstacles
  }
  start() {
    this.player = new Player();
    this.attachEventListeners();

    // setInterval(() => {
    //     const newObstacle = new Obstacle();
    //     this.obstaclesArr.push(newObstacle);
    // }, 3000);

    setInterval(() => {
        this.obstaclesArr.forEach((obstacle) => {
            let currentVh = obstacle.domElement.style.bottom;
            currentVh = Number.parseInt(currentVh.slice(0, 2));
            currentVh -= 1;
            obstacle.domElement.style.bottom = currentVh + "vh";
        });
        if (this.time % 60 === 0) {
            const newObstacle = new Obstacle();
            this.obstaclesArr.push(newObstacle);
        }
        this.time++;
    }, 50);

        // // move obstacles
        // setInterval(() => {
        //     this.obstacleArr.forEach((obstacleInstance) => {
        //         obstacleInstance.moveDown();
        //     });

        // }, 50);
      
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

class Obstacle {
    constructor() {
        this.positionX = 45;
        this.positionY = 90;
        this.domElement = null;
        this.createDomElement();
      }
      createDomElement() {
        this.domElement = document.createElement("div");
        this.domElement.className = "obstacle";
    
        // this.domElement.style.position = "absolute";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";
    
        const boardElm = document.getElementById("board"); // to improve
        boardElm.appendChild(this.domElement);
      }
    //   moveDown(){
    //     this.positionY--;
    //     this.domElement.style.bottom = this.positionY + "vh";
    // }
}


const game = new Game();
game.start();
