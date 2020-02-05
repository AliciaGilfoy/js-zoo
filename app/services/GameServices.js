import Animal from "../models/Animals.js"
import ZooKeeper from "../models/ZooKeeper.js"


let _monkey = new Animal("monkey", 200, 3)
let _player = new ZooKeeper("name", 500, [], 2)
let _giraffe = new Animal("giraffe", 400, 5)

function familyTicketPurchase() {
  _player.bank += (_player.ticketPrice * 4)
  console.log("family ticket ", _player.ticketPrice)
  document.getElementById("zookeeper-bank").innerText = _player.bank
}

function busTicketPurchase() {
  _player.bank += (_player.ticketPrice * 20)
  console.log("bus ticket ", _player.ticketPrice)
  document.getElementById("zookeeper-bank").innerText = _player.bank
}

function ticketPurchase() {
  _player.bank += _player.ticketPrice
  console.log("ticket ", _player.ticketPrice)
  document.getElementById("zookeeper-bank").innerText = _player.bank
}

function addMods() {
  for (let i = 0; i < _player.animals.length; i++) {
    _player.ticketPrice += _player.animals[i].ticketModifier
  }
}

export default class GameServices {

  buyMonkey() {
    if (_player.bank >= _monkey.price) {
      _player.bank -= _monkey.price
      _player.animals.push(_monkey)
      console.log(_player.animals)
      _player.ticketPrice += _monkey.ticketModifier
      _monkey.price += 50
      document.getElementById("monkey-price").textContent = _monkey.price
    }
    else {
      alert("Not enough money")
    }
  }

  buyGiraffe() {
    if (_player.bank >= _giraffe.price) {
      _player.bank -= _giraffe.price
      _player.animals.push(_giraffe)
      console.log(_player.animals)
      _player.ticketPrice += _giraffe.ticketModifier
      _giraffe.price += 50
      document.getElementById("giraffe-price").textContent = _giraffe.price
    }
    else {
      alert("Not enough money")
    }
  }
  addMods() {
    document.getElementById("ticket-cost").innerText = _player.ticketPrice
  }

  sellTicket() {
    setInterval(ticketPurchase, 3000)
    setInterval(familyTicketPurchase, 10000)
    setInterval(busTicketPurchase, 60000)
  }

  constructor() {
    console.log("game service works")
    addMods()
  }

  get ZooKeeper() {
    return _player
  }
}