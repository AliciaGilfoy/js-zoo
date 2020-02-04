import Animal from "../models/Animals.js"
import ZooKeeper from "../models/ZooKeeper.js"


let _monkey = new Animal("monkey", 200, 4)
let _player = new ZooKeeper("name", 500, [], 2)



function ticketPurchase() {
  _player.bank += _player.ticketPrice
  console.log("ticket ", _player.ticketPrice)
  console.log("bank", _player.bank)
  document.getElementById("zookeeper-bank").innerText = _player.bank
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




  sellTicket() {
    setInterval(ticketPurchase, 4000)
    return _player.bank
  }

  constructor() {
    console.log("game service works")
  }

  get ZooKeeper() {
    // return new ZooKeeper(_player.name, _player.bank, _player.animals)
    return _player
  }
}