// for Loops

// syntax execution

for (i = 1; i <= 5; i++) {
  // first - i = 1 , second - check the condition : if its true it execute the code third - increment and add the data to first
  console.log(i);
}

for (i = 0; i <= 10; i++) {
  // starts from 0 ends with 10
  console.log(i);
}

for (i = 5; i <= 50; i += 5) {
  // increment with 5 in every iteration
  console.log(i);
}

for (i = 2; i <= 500; i = i ** 2) {
  // square of every executed number
  console.log(i);
}

for (i = 100; i >= 10; i -= 10) {
  // decrease the number by 10 on each execution
  console.log(i);
}

var arr = ["a", "b", "c", "d", "e", "f"];

for (i = 0; i <= arr.length; i++) {
  // iterate to whole array length one by one
  console.log(arr[i]); // execute all the array according to their index
}

var ar = [10, 20, 51, 1, 2, 3, 100, 5, 7];

for (i = ar.length; i > 1; i--) {
  console.log(ar[i]);
}

// for of loop for array

var arr = ["ab", "bc", "cd", "de", "ef", "fg", 1, 2, 1, 2, 1, 2, 1, 1, 1];

for (ar of arr) {
  console.log(ar);
}
