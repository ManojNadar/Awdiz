// var givenArray = [
//   23, 45, 56, 67, 23, 56, 68, 34, 4556, 78, 655, 23, 568787, 89845, 343, 54576,
//   7873, 323, 54, 636, 6836, 575,
// ];

// // find numbers who odd from given array and return array with those number...

// function odd(array) {
//   let myArray = [];

//   for (let i = 0; i < array.length; i++) {
//     // console.log(array[i]);
//     if (array[i] % 2 != 0) {
//       myArray.push(array[i]);
//     }
//   }
//   return myArray;
// }

// let newOdd = odd(givenArray);
// console.log(newOdd);

// var arr = [23, 45, 0, 10];
// console.log(arr);

// console.log(arr.pop());
// console.log(arr);

// console.log(arr.shift());
// console.log(arr);

// arr.unshift(44);
// console.log(arr);

// let myArr = arr.some((item) => {
//   return item == 45;
// });

// console.log(myArr);

// let myArr2 = arr.includes(10);
// console.log(myArr2);

// Q find  numbers whixh are divisible by 2,5 and 10 from given array then us ethose array to find and make new array with second element of array

// var start = 8723;
// var end = 6567;

// function twoStage(start, end) {
//   var filteredArray = [];

//   var result = [];

//   for (let i = start; i > end; i--) {
//     // console.log(i);
//     if (i % 2 === 0 && i % 5 === 0 && i % 10 === 0) {
//       //   console.log(i);
//       filteredArray.push(i);
//     }
//   }
//   //   console.log(filteredArray);
//   for (j = 0; j < filteredArray.length; j++) {
//     // console.log(filteredArray[j]);
//     result.push(filteredArray[(j += 1)]);
//   }

//   console.log(result);
// }

// twoStage(start, end);

// push,pop,shift,unshift

// var arr = [2, 35, 5, 323, 34, 2, 3];

// arr.push("hello");
// console.log(arr.push("hello"));

// arr.pop()
// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.unshift("hello");
// console.log(arr);



