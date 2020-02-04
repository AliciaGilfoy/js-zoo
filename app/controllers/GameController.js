import GameService from "../services/GameServices.js"


// NOTE Private


let _gameService = new GameService()

let zooKeeper = _gameService.ZooKeeper

function getName() {
  zooKeeper.name = prompt("What is your name?")
  alert(`Hello, ${zooKeeper.name}, welcome to your zoo! You have $${zooKeeper.bank} to spend on new zoo animals`)
  document.getElementById("zookeeper-name").textContent = zooKeeper.name
  return zooKeeper.name
}

function draw() {
  document.getElementById("zookeeper-bank").innerText = zooKeeper.bank
}




// NOTE Public

export default class GameController {
  constructor() {
    getName()
    draw()
    console.log("The controller works")
  }
  sellTicket() {
    _gameService.sellTicket()
  }
  buyMonkey() {
    _gameService.buyMonkey()
    draw()
  }

  getName() {
    console.log(zooKeeper.name)
  }


}

