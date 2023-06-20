let arr = [
  { id: 1, name: "manoj", age: 30, salary: 2000 },
  { id: 2, name: "nadar", age: 32, salary: 1500 },
  { id: 3, name: "hello", age: 33, salary: 1300 },
  { id: 4, name: "welcome", age: 25, salary: 1200 },
];

let user = arr.find((e) => {
  return (e.age = 30);
});

console.log(user);

let userIndex = arr.findIndex((e) => {
  return e.id == 2;
});

console.log(userIndex);

let newArr = arr.map((e) => {
  return e;
});

console.log(newArr);

let newFilter = arr.filter((e) => {
  return e.age >= 30;
});

console.log(newFilter);

let filterWord = arr.filter((e) => {
  return e.name.length > 5;
});
console.log(filterWord);

// sorting

let unsorted = [5, 2, 6, 2, 1, 45, 7, 8, 4, 3, 367, 3, 0];

console.log(unsorted.sort());

let sortedAsc = unsorted.sort((a, b) => {
  return a - b;
});

console.log(sortedAsc);
let sortedDes = unsorted.sort((a, b) => {
  return b - a;
});

console.log(sortedDes);
