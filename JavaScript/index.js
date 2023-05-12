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
