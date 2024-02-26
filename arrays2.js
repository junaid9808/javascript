//You have an array `fruits` with values ['apple', 'mango']. How can you add a new element 'banana' to the end of this array using the `push` method?

// const fruits = ["apple", "banana"];

// fruits.push("mango");
// console.log(fruits);

// If you have an array `colors` with values ['red', 'green', 'blue'], how can you remove the last color ('blue') from the array?

// const colors = ["red", "green", "blue"];
// colors.pop();
// console.log(colors);

// Suppose you have two arrays: `firstArray` with values [1, 2, 3] and `secondArray` with values [4, 5, 6]. How can you combine these two arrays into a new array?

// const firstArray = [1, 2, 3];
// const secondArray = [4, 5, 6, 7];
// const thirdArray = firstArray.concat(secondArray);
// const thirdArray1 = [...firstArray, "a", "b", ...secondArray];
// console.log(thirdArray1);

// Given an array `numbers` with values [10, 20, 30, 40, 50],
// how can you check if the number 30 is present in the array ?

// const numbers = [10, 20, 30, 40, 50];
// let num = numbers.includes(30);
// console.log(num);

// If you have an array `names` with values ['Alice', 'Bob', 'Charlie'],
// how can you loop through each name and print them to the
//console(HINT: Use method in which new array is not return i.e.property of that method)?

// const values = ["Alice", "Bob", "Charlie"];
// values.forEach((value) => {
//   console.log(value);
// });
// values.map((val) => {
//   console.log(val);
// });

// If you have an array `names` with values ['Alice', 'Bob', 'Charlie'], how can you loop through each name and print them to the console
// (HINT: Use method in which new array is returned i.e.property of that method)?

// const values = ["Alice", "Bob", "Charlie"];

// values.map((val) => {
//   console.log(val);
// });

// You have an array `ages` with values [35, 22, 48, 18, 40].
// How can you rearrange this array in ascending order ?

// const values = [35, 22, 48, 18, 40];

// let val = values.sort();
// let val2 = values.reverse();
// console.log(val);
// console.log(val2);

// Suppose you have an array `animals` with values ['lion', 'elephant', 'giraffe'].
// How can you find the index of the animal 'elephant' ?

// const animals = ["lion", "elephant", "giraffe"];
// let ani = animals.indexOf("giraffe");
// console.log(ani);

// Given an array `numbers` with values [5, 10, 15, 20],
// how can you find the sum of all the numbers in the array ?
// const number = [10, 15, 20];
// let sum = 0;
// for (let num of numbers) {
//   sum = sum + num;
// }
//console.log(sum);

// sum with reduce method

// let sum = number.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);
// console.log(sum);

// You have an array `colors` with values ['red', 'green', 'blue'].
// How can you add a new color 'yellow' to the beginning of this array

// const colors = ["red", "green", "blue"];
// colors.unshift("yellow");
// console.log(colors);

//

// const words = ["apple", "banana", "orange", "kiwi"];

// const firstFruit = words.find((word) => word.includes("a"));

// console.log(firstFruit);
