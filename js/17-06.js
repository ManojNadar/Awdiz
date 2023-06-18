// var,ket,const keywords

// var myName = "manoj"; //assigning
// myName = "Nadar"; // re-assigning
// var myName = "manoj"; // re - declaring
// console.log(myName);
// // re - assigning and re - declaring is possible in var keyword

// let myName = "manoj"; // assigning
// myName = "nadar"; // re-assigning
// // let myName = "manoj"; // re-declaring not possible
// console.log(myName);
// // re - assigning is possible in let keyword and re -declaring is not possible in let keyword

// const myName = "manoj" //assigning
// myName = "nadar" // re - assigning is not possible
// const myName = "manoj" // re - declaring also not possible
// console.log(myName);
// both re - assigning and re -declaring is not possible n const keyword

// closures
// let myName = "manoj";
// function greetings() {
//   var myName = "manoj";
//   console.log("greeting function");
//   function callName() {
//     console.log("Hello", myName);
//   }
//   return callName;
// }

// // greetings();
// var result = greetings();
// // console.log(result);
// console.log(result());

// in closures whenever the function(innerFunction) is trying to call or accessing the variables which doesn't existing on that particluar function it will work as lexical scoping by searching to its parent function and even when the parent doesn't have that variable it will access the global scope to access the variable...
// And whenever we return the function without using the paranthesis it will return the whole function including syntax that can be called later and it will remember the variable and execute with that variable

// function myName() {
//   console.log("manoj");
// }
// let name = myName;
// console.log(name());
// let name = "nadar";

// function greet() {
//   // let name = "manoj";
//   function myName(name) {
//     console.log("name", name);
//   }

//   return myName("manoj");
// }

// greet();

// {
//   let obj = 1;
// }

// {
//   let obj = 2;
// }
