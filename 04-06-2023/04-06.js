// var num1 = 20;
// var num2 = 30;

// function addition(num1, num2) {
//   console.log(num1 + num2);
// }
// addition(num1, num2);

// var array = [2, 34, 223, 43, 9, 5];

// var target = 77;

// function findTwoNum(array, target) { // we can use any names as a parameter
//   for (i = 0; i < array.length - 1; i++) {
//     for (j = i + 1; j < array.length; j++) {
//       if (array[i] + array[j] === target) {
//         console.log(array[i], array[j]);
//       }
//     }
//   }
// }

// findTwoNum(array, target);

// ASSIGNMENT

// Q. Find subtraction of give two numbers by using function.

// var number1 = 9876;
// var number2 = 5678;
// function subtraction(num1, num2) {
//   console.log(num1 - num2);
// }

// subtraction(number1, number2);

// Q. Find multiplication of give two numbers by using function.

// var number3 = 9876;
// var number4 = 5678;
// function multiplication(num3, num4) {
//     console.log(num3*num4)
// }

// multiplication(number3, number4);

// Q. Find dividation of give two numbers by using function.

// var number5 = 9876;
// var number6 = 5678;
// function division(num5, num6) {
//   console.log(num5 / num6);
// }

// division(number5, number6);

// Q. Find three numbers from given array who's addition is equal to target.

// var array = [34, 45, 56, 67, 78, 34, 76, 234, 567, 7834, 56, 34];
// var target = 112;
// function additionOfThreeNumber(array, target) {
//   //   console.log("inside fun");
//   for (i = 0; i < array.length - 2; i++) {
//     for (j = i + 1; j < array.length - 1; j++) {
//       for (k = j + 1; k < array.length; k++) {
//         if (array[i] + array[j] + array[k] == target) {
//           console.log(array[i], array[j], array[k]);
//         }
//       }
//     }
//   }
// }
// additionOfThreeNumber(array, target);

var array = [34, 45, 56, 67, 78, 34, 76, 234, 567, 7834, 56, 34];
var target = 112;

function additionOfThreeNumber(array, target) {
  var flag = false;

  for (let i = 0; i < array.length - 2; i++) {
    for (let j = i + 1; j < array.length - 1; j++) {
      for (k = j + 1; k < array.length; k++) {
        if (array[i] + array[j] + array[k] == target) {
          console.log(array[i], array[j], array[k]);
          flag = true;
        }
      }
    }
  }
  if (flag == false) {
    console.log("number not found");
  }
}

additionOfThreeNumber(array, target);
