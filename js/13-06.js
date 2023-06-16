// console.log("first");
// console.log("second");
// console.log("third");

// setTimeout(() => {
//   console.log("first");
// }, 2000);
// setTimeout(() => {
//   console.log("second");
// }, 1000);
// setTimeout(() => {
//   console.log("third");
// }, 1500);

// ASync Await

// function greetings() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Welcome to Awdiz");
//     }, 3000);
//   });
// }

// async function message() {
//   console.log("iam First");
//   let greet = await greetings();
//   console.log(greet);
//   console.log("iam last");
// }

// message();

// function greetings() {
//   setTimeout(() => {
//     console.log("Welcome to Awdiz");
//   }, 3000);
// }

// function message() {
//   console.log("iam First");
//   let greet = greetings();
//   console.log(greet); //undefined
//   console.log("iam last");
// }

// message();

// function greetings() {
//   setTimeout(() => {
//     console.log("Welcome to Awdiz");
//   }, 3000);
// }
// function students() {
//   setTimeout(() => {
//     console.log("new to Awdiz");
//   }, 3500);
// }

// function message() {
//   console.log("iam First");
//   greetings();
//   students();
//   console.log("iam last");
// }

// message();

// function greetings() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Welcome to Awdiz");
//     }, 5000);
//   });
// }
// function students() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("students of Awdiz");
//     }, 2000);
//   });
// }

// async function message() {
//   console.log("iam First");
//   let std = await students();
//   console.log(std);
//   let greet = await greetings();
//   console.log(greet);
//   console.log("iam last");
// }

// message();

// var arr = [2, 53, 5, 23, 5, 67, 83, 2, 6];
// let sorted = arr.sort((a, b) => {
//   return a - b;
// });
// console.log(sorted);
