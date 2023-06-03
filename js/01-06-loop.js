// Nested Loops

// When the nested loop condition is not  completely (checked)..the parent loop doesnot move to forward

// let target = 50;

// let array = [10, 20, 30, 15, 45, 2, 9, 5]; by adding 2 number

// for (i = 0; i < array.length; i++) {
//   //   console.log(array[i]);

//   for (j = i + 1; j < array.length; j++) {
//     // console.log(array[j]);

//     if (array[i] + array[j] === target) {
//       console.log(array[i], array[j]);
//     }
//   }
// }

// i = 0 , j = i + 1     10,20  comapare
// i = 0, j++ (j = 2)     10,30 compare
// iterate till the nested loop finish the array
// after complete the first nested loop the parent loop iterate to the next index

// i = 1, j= i+1 (j=2)    20,30 compare
// i = 1,j++ (j=3)     20,15 compare
// iterate till the nested loop finish the array
// after complete the first nested loop the parent loop iterate to the next index

// ASSIGNMENT

// let value = 100; //by subtracting 2 number

// let marks = [120, 30, 40, 20, 500, 35, 70];

// for (let i = 0; i < marks.length; i++) {
//   for (let j = i + 1; j < marks.length; j++) {
//     if (marks[i] - marks[j] === value) {
//       console.log(marks[i], "-", marks[j], "=", value);
//     }
//   }
// }

// bby adding three number get the answer 55

// let findNum = 55;

// let num = [44, 33, 2, 11, 14, 35, 20, 2];

// for (i = 0; i < num.length - 2; i++) {
//   //   console.log(num[i]);
//   for (j = i + 1; j < num.length - 1; j++) {
//     // console.log(num[j]);
//     for (k = j + 1; k < num.length; k++) {
//       //   console.log(num[k]);
//       if (num[i] + num[j] + num[k] === findNum) {
//         console.log(num[i], "+", num[j], "+", num[k], "=", findNum);
//       }
//     }
//   }
// }

// Find 4 numbers from array that addition is target. Use nested loop 4 times.

var target = 25;
var array = [
  2, 3, 5, 5, 32, 54, 23, 12, 45, 23, 43, 1, 34, 65, 1, 54, 6, 33, 4, 9, 7,
];

// console.log(array.length);

for (let i = 0; i < array.length - 3; i++) {
  // console.log(array[i]);
  for (let j = i + 1; j < array.length - 2; j++) {
    // console.log(array[j]);
    for (let k = j + 1; k < array.length - 1; k++) {
      // console.log(array[k]);
      for (let l = k + 1; l < array.length; l++) {
        // console.log(array[l]);

        if (array[i] + array[j] + array[k] + array[l] === target) {
          console.log(i, "+", j, "+", k, "+", l, "=", target);
        }
      }
    }
  }
}

// *************************************************************//
// Sum of all elements inside array

// let total = [12, 50, 22, 55];

// let sum = 0;

// for (let i = 0; i < total.length; i++) {
//   sum += total[i];
//   // first the sum value is 0 and addition to total[i] = which is 0 index = 12 add 0 + 12 = 12; then sum = 12 + total[i] = which is 1 index = 50 add 12 + 50
// }

// console.log(sum);

// let arr = [12, 50, 22, 55];

// let newArray = arr.filter((num, i) => {
//   return num < 30;
// });

// console.log(newArray);

// let mapping = arr.map((val) => {
//   if (val <= 50) {
//     return val;
//   }
// });

// console.log(mapping);

// let reduceArray = arr.reduce((a, b) => {
//   return a + b;
// });

// console.log(reduceArray);
