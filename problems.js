//  Create an object representing a person with properties like name, age, and address

// const person = {
//   name: "ali",
//   age: 30,
//   address: "24 kamran",
// };
// console.log(person);

// Use the modulo operator to find if a given number is even or odd.

// let number = 0;
// showNumber(1);
// function showNumber(num) {
//   if (num % 2 === 0) {
//     console.log("even");
//   } else {
//     console.log("odd");
//   }
// }

// Write a function to calculate the area of a rectangle.

// function calculateArea(width, height) {
//   return width * height;
// }
// let area = calculateArea(20, 50);
// console.log(area);

// Write a conditional statement using a comparison operator to check if a number is positive, negative, or zero.

// function checkNumber(num) {
//   if (num === 0) {
//     console.log("number is zero");
//   } else if (num < 0) {
//     console.log("number is negative");
//   } else {
//     console.log("number is positive");
//   }
// }
// checkNumber(0);

// Identify and correct the mistake in the following expression: `if (5 == '5')`.

//    if(5 === 5){}

//  Rewrite an if-else statement using the ternary operator.

// function showNumber(num) {
//   return num % 2 === 0 ? "even" : "odd";
// }
// let number = showNumber(4);
// console.log(number);

//  Write a for loop to print the first 10 multiples of a given number.

// function multiples(num) {
//   let result = 0;
//   for (let i = 0; i <= 10; i++) {
//     result = num * i;
//   }
//   return result;
// }
// let res = multiples(2);
// console.log(res);

// Write a while loop to find the factorial of a number.
// Recursive Method

// let n = 1;
// function factorial(n) {
//   if (n === 0) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }
//console.log(factorial(n));

// Iterative Method of factor
let number = 5;

// function factorial(num) {
//   let ans = 1;
//   let i = 1;
//   if (num === 0) return 1;
//   else {
//     while (i <= num) {
//       ans = ans * i;
//       i++;
//     }
//     return ans;
//   }
// }

// console.log(factorial(number));

// Use for-in to iterate over the properties of an object

// const person = {
//   firstName: "ali",
//   lastName: "raza",
//   phoneNumber: 1234,
// };

// function showPerson(person) {
//   for (let key in person) {
//     console.log(key, person[key]);
//   }
// }
// showPerson(person);

// Write a for-of loop to iterate over the elements of an array

// const person = ["ali", "raza", 12345];

// function showPerson(person) {
//   for (let per of person) {
//     console.log(per);
//   }
// }
// showPerson(person);

//
// Sample array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using break to exit the loop early
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 5) {
    console.log("Found 5! Exiting loop.");
    break;
  }
  console.log(numbers[i]);
}

// Using continue to skip processing for specific elements
console.log("\nProcessing array with continue:");
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(`Skipping even number: ${numbers[i]}`);
    continue;
  }
  console.log(`Processing odd number: ${numbers[i]}`);
}
