class Alligator {
  constructor(name, age, teeth, price) {
    this.name = name
    this.age = age
    this.teeth = teeth
    this.price = price
    this.happiness = 0
  }
}

class Baboon {
  constructor(name, age, color, price) {
    this.name = name
    this.age = age
    this.color = color
    this.price = price
    this.happiness = 0
  }
}

class Cheetah {
  constructor(name, age, speed, price) {
    this.name = name
    this.age = age
    this.speed = speed
    this.price = price
    this.happiness = 0
  }
}

class Dolphin {
  constructor(name, age, color, price) {
    this.name = name
    this.age = age
    this.color = color
    this.price = price
    this.happiness = 0
  }
}

class Elephant {
  constructor(name, age, weight, price) {
    this.name = name
    this.age = age
    this.weight = weight
    this.price = price
    this.happiness = 0
  }
}

class Frog {
  constructor(name, age, color, price) {
    this.name = name
    this.age = age
    this.color = color
    this.price = price
    this.happiness = 0
  }
}

class Giraffe {
  constructor(name, age, height, price) {
    this.name = name
    this.age = age
    this.height = height
    this.price = price
    this.happiness = 0
  }
}

class Hippo {
  constructor(name, age, weight, price) {
    this.name = name
    this.age = age
    this.weight = weight
    this.price = price
    this.happiness = 0
  }
}

class Iguana {
  constructor(name, age, color, price) {
    this.name = name
    this.age = age
    this.color = color
    this.price = price
    this.happiness = 0
  }
}

class Jellyfish {
  constructor(name, age, color, price) {
    this.name = name
    this.age = age
    this.color = color
    this.price = price
    this.happiness = 0
  }
}

class Kangaroo {
  constructor(name, age, jump, price) {
    this.name = name
    this.age = age
    this.jump = jump
    this.price = price
    this.happiness = 0
  }
}

class Leopard {
  constructor(name, age, speed, price) {
    this.name = name
    this.age = age
    this.speed = speed
    this.price = price
    this.happiness = 0
  }
}

class Macaw {
  constructor(name, age, wingspan, price) {
    this.name = name
    this.age = age
    this.wingspan = wingspan
    this.price = price
    this.happiness = 0
  }
}

let alton = new Alligator("Alton", 6, 35, 500)
let bob = new Baboon("Bob", 4, "red", 650)
let chrissy = new Cheetah("Chrissy", 3, 100, 450)
let daryll = new Dolphin("Daryll", 10, "blue", 1000)
let erin = new Elephant("Erin", 25, 1500, 4000)
let freddy = new Frog("Freddy", 2, "green", 25)
let gus = new Giraffe("Gus", 7, 13, 900)
let harry = new Hippo("Harry", 52, 4000, 200)
let indy = new Iguana("Indy", 1, "green", 30)
let josie = new Jellyfish("Josie", 8, "purple", 35)
let ken = new Kangaroo("Ken", 5, 7, 650)
let leo = new Leopard("Leo", 9, 150, 325)
let mary = new Macaw("Mary", 40, 3, 100)

let zooKeeper = {
  name: "player",
  money: 150000
}


function getName() {
  zooKeeper.name = prompt("What is your name?")
  alert(`Hello, ${zooKeeper.name}, welcome to the zoo! You have $150,000 to spend on new zoo animals and cages`)
  console.log(zooKeeper.name)
}

getName()

class Safari {
  constructor(type, name) {
    this.type = type
    this.name = name
  }

}