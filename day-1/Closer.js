// function createFunctions() {
//     const arr = [];
//     for (var i = 0; i < 3; i++) {
//         arr.push(function () {
//             console.log(i);
//         });
//     }
//     return arr;
// }

// const functions = createFunctions();
// functions[0](); // ?
// functions[1](); // ?
// functions[2](); // ?

// function createBankAccount(initialBalance) {
//   let balance = initialBalance;
//   return {
//     deposit: function (amount) {
//       balance = balance + amount;
//       return balance;
//     },
//     withdraw: function (amount) {
//       if (amount > balance) {
//         return "Insufficient funds";
//       }
//       balance = balance - amount;
//       return balance;
//     },
//     getBalance: function () {
//       return balance;
//     },
//   };
// }
// const account = createBankAccount(1000);
// console.log(account.deposit(500)); // ?
// console.log(account.withdraw(300)); // ?
// console.log(account.getBalance()); // ?

// function debounce(func, delay) {
//     let timer;
//     return function (...args) {
//         clearTimeout(timer);
//         timer = setTimeout(() => func(...args), delay);
//     };
// }
// const log = debounce(() => console.log("Debounced!"), 1000);
// log();
// log();
// log(); // call after 1 second
let hello = 'Hello world!';

let message;
message = hello;

console.log(hello);
console.log(message);
"use strict";
let age = prompt('How old are you?', 100);

console.log(`You are ${age} years old!`); // You are 100 years old!