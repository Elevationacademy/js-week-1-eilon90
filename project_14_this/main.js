//exercise 1:
const person = {
    hungry: true,
  
    feed: function () {
      if (this.hungry) {
        this.hungry = false;
        alert('Im no longer hungry!')
      }
    }
  }
  
person.feed() //should alert "I'm no longer hungry"
  

//exercise 2:
const pump = function (amount) {
    this.liters += amount;
    console.log('You put ' + amount + ' liters in ' + this.name);
  };
  
  const garage = {
    car1: {
      name: 'Audi',
      liters: 3,
      fillTank: pump
    },
    car2: {
      name: 'Mercedes',
      liters: 1,
      fillTank: pump
    }
  };
  
garage.car1.fillTank(2);
console.log('Audi should have 5 liters: ',  garage.car1.liters);

garage.car2.fillTank(30);
console.log('Mercedes should have 31 liters: ', garage.car2.liters);
  


//exercise 3:
const pumpFuel = function (plane) {
    plane.fuel += 1;
  };
  
  const airplane = {
    fly: function () {
      if (this.fuel < 2) {
        return 'on the ground!';
      }
      else {
        return 'flying!';
      }
    }
  };
  
  console.log('The plane should not be able to fly (yet): ' + airplane.fly());
  
  pumpFuel(airplane);
  console.log('The plane should STILL not be able to fly: ' + airplane.fly());
  
  pumpFuel(airplane);
  console.log('Take off! ' + airplane.fly());  
  


//exercise 4:
const tipJar = {
    coinCount: 20,
    tip: function () {
      this.coinCount += 1;
    },
    stealCoins: function (num) {
        this.coinCount -= num;
    }
  };
  
  tipJar.tip();
  console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);
  
  tipJar.stealCoins(3);
  console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);
  
  tipJar.stealCoins(10);
  console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);
  


//exercise 5:
const revealSecret = function () {
    return this.secret;
};

const shoutIt = function (person, func) {
    person.revealItAll = func;
    const result = person.revealItAll();
    alert(person.name + " said: " + result);
};

const avi = {
    name: "Avi",
    secret: "Im scared of snakes!"
};

const narkis = {
    name: "Narkis",
    secret: "I dont have secrets because I'm zen like that."
};

shoutIt(avi, revealSecret);
shoutIt(narkis, revealSecret);
  

// //exercise 6.1:
// const coffeeShop = {
//     beans: 40,
  
//     drinkRequirements: {
//         latte: 10,
//         americano: 5,
//         doubleShot: 15,
//         frenchPress: 12
//     },

//     makeDrink: function (drinkType) {
//         const coffee = this.drinkRequirements[drinkType];
//         switch (coffee <= this.beans) {
//             case (true): this.beans -= coffee;
//             alert (`making ${drinkType}`);
//             break;
//             case (false): alert(`Sorry, we're all out of beans!`)
//             break;
//             default: alert(`Sorry, we don't make ${drinkType}`);
//             break;
//         }
//     }
// }

// coffeeShop.makeDrink("latte"); 
// coffeeShop.makeDrink("americano");
// coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
// coffeeShop.makeDrink("doubleShot");
// coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
  

// //extension 1:
// const coffeeShop = {
//     beans: 40,
    
//     money: 20,
  
//     drinkRequirements: {
//         latte: 10,
//         americano: 5,
//         doubleShot: 15,
//         frenchPress: 12
//     },

//     makeDrink: function (drinkType) {
//         const coffee = this.drinkRequirements[drinkType];
//         switch (coffee <= this.beans) {
//             case (true): this.beans -= coffee;
//             alert (`making ${drinkType}`);
//             break;
//             case (false): alert(`Sorry, we're all out of beans!`)
//             break;
//             default: alert(`Sorry, we don't make ${drinkType}`);
//             break;
//         }
//     },

//     buyBeans: function (numBeans) {
//         this.money -= 0.5 * numBeans;
//         this.beans += numBeans;
//         alert(`now you got ${this.beans} beans and ${this.money} shekels`);
//     }
// }

// coffeeShop.makeDrink("latte"); 
// coffeeShop.makeDrink("americano");
// coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
// coffeeShop.makeDrink("doubleShot");
// coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"

// coffeeShop.buyBeans(10);
// coffeeShop.buyBeans(5);



//extension 2:
const coffeeShop = {
    beans: 40,
    
    money: 20,
  
    drinkRequirements: {
        latte: {beanRequirement: 10, price: 5},
        americano: {beanRequirement: 5, price: 3},
        doubleShot: {beanRequirement: 15, price: 10},
        frenchPress: {beanRequirement: 12, price: 8}
    },

    makeDrink: function (drinkType) {
        this.beans -= this.drinkRequirements[drinkType].beanRequirement;
        alert (`making ${drinkType}. now you got ${this.beans} beans and ${this.money} shekels.`);
    },

    buyBeans: function (numBeans) {
        this.money -= 0.5 * numBeans;
        this.beans += numBeans;
        alert(`buying ${numBeans} beans. now you got ${this.beans} beans and ${this.money} shekels`);
    },

    buyDrink: function (drinkType) {
        const coffeeType = this.drinkRequirements[drinkType];
        if (!coffeeType) {
            alert(`Sorry, we don't make ${drinkType}`);
            return;
        }
        switch (coffeeType.beanRequirement <= this.beans) {
            case (true): this.money += coffeeType.price;
            this.makeDrink(drinkType);
            break;
            case (false): alert(`Sorry, we're all out of beans!`);
            break;
        }
    }
}

coffeeShop.buyDrink("latte"); 
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.buyDrink("doubleShot");
coffeeShop.buyDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"

coffeeShop.buyBeans(10);
coffeeShop.buyBeans(5);