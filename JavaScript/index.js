// 1. array

// let fruits = ["apple", "orange", "banana"];

// fruits.push("lemon"); // add an element
// fruits.pop(); // remove the last element
// fruits.unshift("mango"); // add element to begining
// fruits.shift(); // removes element from begining

// let lenght = fruits.length;
// let index = fruits.indexOf("orange");

// console.log(index);

// 2. array.forEach()

// let fruits = ["banana", "apple", "mango"];
// fruits.forEach(capitalize);

// function capitalize(element, index, array) {
//   array[index] = element[0].toUpperCase() + element.substring(1);
// }

// console.log(fruits);

// 3. array.map()

// let numbers = [1, 2, 3, 4, 5];
// let squares = numbers.map(square);
// let cubes = numbers.map(cube);

// squares.forEach(square);
// squares.forEach(print);
// cubes.forEach(cube);
// cubes.forEach(print);

// function square(x){
//   return Math.pow(x, 2);
// }

// function cube(x){
//   return Math.pow(x, 3);
// }

// function print(element){
//   console.log(element);
// }

// 4. array.filter()

// let ages = [18, 16, 21, 17, 19, 90];
// let adults = ages.filter(checkAge);

// adults.forEach(print);

// function checkAge(element) {
//   return element >= 18;
// }

// function print(element) {
//   console.log(element);
// }

// 5. array.reduce()

// let prices = [5, 10, 15, 20, 25, 30];
// let total = prices.reduce(checkOut);

// console.log(`The total is: ${total}$`);

// function checkOut(total, element) {
//   return total + element;
// }

// 6. array.sort

// let grades = [100, 50, 90, 60, 80, 70];

// grades = grades.sort(ascendingSort);
// grades.forEach(print);

// function descendingSort(x, y) {
//   return y - x;
// }

// function ascendingSort(x, y) {
//   return x - y;
// }

// function print(element) {
//   console.log(element);
// }

// 7. Function expression

// const greeting = function () {
//   console.log("Hello!");
// };

// greeting();

// let count = 0;

// document.getElementById("increaseButton").onclick = () => {
//   count++;
//   document.getElementById("myLabel").innerHTML = count;
// };

// document.getElementById("decreaseButton").onclick = () => {
//   count--;
//   document.getElementById("myLabel").innerHTML = count;
// };

// document.getElementById("resetButton").onclick = () => {
//   count = 0;
//   document.getElementById("myLabel").innerHTML = count;
// };

// let grades = [100, 50, 90, 60, 80, 70];

// grades.sort((x, y) => y - x);

// grades.forEach((element) => console.log(element));

// 8.

// let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

// shuffle(cards);
// console.log(cards);
// cards.forEach((card) => console.log(card));

// function shuffle(array) {
//   let currentIndex = array.lenght;

//   while (currentIndex != 0) {
//     let randomIndex = Math.floor(Math.random() * array.lenght);
//     currentIndex -= 1;

//     let temp = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temp;
//   }

//   return array;
// }

// 9. nested function

// let userName = "Bro";
// let userInbox = 0;

// login();

// function login() {
//   displayUserName();
//   displayUserInbox();

//   function displayUserName() {
//     console.log(`Welcome ${userName}!`);
//   }
//   function displayUserInbox() {
//     console.log(`You have ${userInbox} new messages!`);
//   }
// }

// 10. Map = object that holds key-value pairs of any data types

// const store = new Map([
//   ["t-shirt", 20],
//   ["jeans", 30],
//   ["socks", 10],
//   ["underwear", 50],
// ]);

// let shoppingCart = 0;

// shoppingCart += store.get("t-shirt");
// shoppingCart += store.get("underwear");
// console.log(shoppingCart);
// store.set("hat", 40);
// store.delete("hat");
// console.log(store.has("hat"));

// store.forEach((value, key) => console.log(`${key} $${value}`));

// 11. Object

// const car1 = {
//   model: "Mustand",
//   color: "red",
//   year: 2023,

//   drive: function () {
//     console.log("You drive the car");
//   },

//   brake: function () {
//     console.log("You step on the brakes");
//   },
// };

// const car2 = {
//   model: "Corvette",
//   color: "blue",
//   year: 2024,

//   drive: function () {
//     console.log(`You drive the ${this.model}`);
//   },
// };
//   brake: function () {
//     console.log("You step on the brakes");
//   },
// };

// console.log(car2.model);
// console.log(car2.color);
// console.log(car2.year);

// car2.drive();
// car2.brake();

// 12. Class

// class Player {
//   score = 0;

//   pause() {
//     console.log("You paused the game");
//   }
//   exit() {
//     console.log("You exited the game");
//   }
// }

// const player1 = new Player();
// const player2 = new Player();
// const player3 = new Player();
// const player4 = new Player();

// player1.score++;
// player2.score++;

// console.log(player2.score);

// 13. constructor

// class Student {
//   constructor(name, age, gpa) {
//     this.name = name;
//     this.age = age;
//     this.gpa = gpa;
//   }
//   study() {
//     console.log(`${this.name} is studing`);
//   }
// }

// const student1 = new Student("Spongebob", 30, 3.2);
// const student2 = new Student("Patrick", 35, 1.5);
// const student3 = new Student("Patrick", 35, 1.5);

// console.log(student1.name);
// console.log(student1.age);
// console.log(student1.gpa);
// student1.study();

// console.log(student2.name);
// console.log(student2.age);
// console.log(student2.gpa);
// student2.study();

// 14. static keyword

// class Car {
//   static numberOfCars = 0;
//   constructor(model) {
//     this.model = model;
//     Car.numberOfCars += 1;
//   }

//   static startRace() {
//     console.log("3....2.....1...GO!");
//   }
// }

// const car1 = new Car("Mustang");
// const car2 = new Car("Corvette");
// const car3 = new Car("BMW");
// const car4 = new Car("Audi");
// const car5 = new Car("Lamba");

// Car.startRace();

// 15. inheritance

// class Animal {
//   alive = true;

//   eat() {
//     console.log(`This ${this.name} is eating`);
//   }
//   sleep() {
//     console.log(`This ${this.name} is sleeping`);
//   }
// }

// class Rabbit extends Animal {
//   name = "rabbit";

//   run() {
//     console.log(`This ${this.name} is running`);
//   }
// }
// class Fish extends Animal {
//   name = "fish";

//   swim() {
//     console.log(`This ${this.name} is swimming`);
//   }
// }
// class Hawk extends Animal {
//   name = "hawk";

//   fly() {
//     console.log(`This ${this.name} is flying`);
//   }
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();

// // console.log(rabbit.alive);
// rabbit.eat();
// rabbit.sleep();
// fish.swim();
// console.log(fish.alive);
// fish.sleep();
// console.log(hawk.alive);
// hawk.eat();
// hawk.sleep();
// hawk.fly();

// 16. super keyword

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
// class Rabbit extends Animal {
//   constructor(name, age, runSpeed) {
//     super(name, age);
//     this.runSpeed = runSpeed;
//   }
// }
// class Fish extends Animal {
//   constructor(name, age, swimSpeed) {
//     super(name, age);
//     this.swimSpeed = swimSpeed;
//   }
// }
// class Hawk extends Animal {
//   constructor(name, age, flySpeed) {
//     super(name, age);
//     this.flySpeed = flySpeed;
//   }
// }

// const rabbit = new Rabbit("rabbit", 1, 40);
// const fish = new Fish("fish", 2, 80);
// const hawk = new Hawk("hawk", 3, 200);

// console.log(hawk.name);
// console.log(hawk.age);
// console.log(hawk.flySpeed);

// 17. GET, SET

// class Car {
//   constructor(power) {
//     this._gas = 25;
//     this._power = power;
//   }
//   get power() {
//     return `${this._power}hp`;
//   }
//   get gas() {
//     return `${this._gas}L`;
//   }
//   set gas(value) {
//     if (value > 50) {
//       value = 50;
//     } else if (value < 0) {
//       value = 0;
//     }
//     this._gas = value;
//   }
// }

// let car = new Car(400);

// car.gas = -1;

// console.log(car.power);
// console.log(car.gas);

// 18. Object as argument

// class Car {
//   constructor(model, year, color) {
//     this.model = model;
//     this.year = year;
//     this.color = color;
//   }
// }

// const car1 = new Car("Mustang", 2023, "red");
// const car2 = new Car("Corvette", 2024, "blue");
// const car3 = new Car("Lambo", 2022, "yellow");

// changeColor(car3, "gold");
// displayInfo(car3);

// function displayInfo(car) {
//   console.log(car.model);
//   console.log(car.year);
//   console.log(car.color);
// }

// function changeColor(car, color) {
//   car.color = color;
// }

// 19. Array of objects

// class Car {
//   constructor(model, year, color) {
//     this.model = model;
//     this.year = year;
//     this.color = color;
//   }

//   drive() {
//     console.log(`You drive the ${this.model}`);
//   }
// }

// const car1 = new Car("Mustang", 2023, "red");
// const car2 = new Car("Corvette", 2024, "blue");
// const car3 = new Car("Lambo", 2022, "yellow");
// const car4 = new Car("Ferrari", 2025, "white");

// const cars = [car1, car2, car3, car4];

// console.log(cars[0].model);
// console.log(cars[1].model);
// console.log(cars[2].model);

// cars[0].drive();
// cars[1].drive();
// cars[2].drive();
// startRace(cars);

// function startRace(cars) {
//   for (const car of cars) {
//     car.drive();
//   }
// }

// 20. Anonymous objects

// class Card {
//   constructor(value, suit) {
//     this.value = value;
//     this.suit = suit;
//   }
// }

// let cards = [
//   new Card("A", "Hearts"),
//   new Card("A", "Spades"),
//   new Card("A", "Diamons"),
//   new Card("A", "Clubs"),
//   new Card("2", "Hearts"),
//   new Card("2", "Spades"),
//   new Card("2", "Diamons"),
//   new Card("2", "Clubs"),
// ];

// console.log(card1.value + card1.suit);
// console.log(cards[7].value + cards[7].suit);

// cards.forEach((card) => console.log(`${card.value} ${card.suit}`));

// 21. Error
// try {
//   let x = window.prompt("Enter a #");
//   x = Number(x);

//   if (isNaN(x)) throw "That wasn't a number!";
//   if (x == "") throw "That was empty!";

//   console.log(`${x} is a number`);
// } catch (error) {
//   console.log(error);
// }

// 22. setTimeoout()

// let item = "cryptocurrency";
// let price = 420.96;

// let timer = setTimeout(firstMessage, 3000);
// let timer2 = setTimeout(secondMessage, 6000);
// let timer3 = setTimeout(thirdMessage, 9000);

// function firstMessage() {
//   alert(`Buy this ${item} for ${price}$!`);
// }
// function secondMessage() {
//   alert(`This is not a scam`);
// }
// function thirdMessage() {
//   alert(`DO it`);
// }

// document.querySelector("#myButton").onclick = function () {
//   clearTimeout(timer);
//   clearInterval(timer2);
//   clearTimeout(timer3);
//   alert(`Thanks for being an idiot!`);
// };

// 23. setInterval()

// let count = 0;

// let max = window.prompt("Count up to what #?");
// max = Number(max);

// const myTimer = setInterval(countUp, 1000);

// function countUp() {
//   count++;
//   console.log(count);
//   if (count >= max) {
//     clearInterval(myTimer);
//   }
// }

// 24. Date object

const label = document.querySelector("#timeClock");

update();
setInterval(update, 1000);

function update() {
  let date = new Date();
  label.innerHTML = formatTime(date);

  function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amOrPm = hours >= 12 ? "pm" : "am";

    hours = hours % 12 || 12;

    hours = formatZeroes(hours);
    minutes = formatZeroes(minutes);
    seconds = formatZeroes(seconds);

    return `${hours}:${minutes}:${seconds} ${amOrPm}`;
  }

  function formatZeroes(time) {
    time = time.toString();
    if (time.lenght < 2) {
      return "0" + time;
    } else {
      return time;
    }
  }
}
