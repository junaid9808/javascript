// console.log(sum(10));
// function sum(limit) {
//   let sum = 0;
//   for (let i = 0; i <= limit; i++) {
//     if (i % 3 === 0 || i % 5 === 0) sum += i;
//   }
//   return sum;
// }
// max of tow numbers
// console.log(max(5, 3));
// function max(a, b) {
//   if (a > b) return a;
//   else return b;
// }
// landscape portrait
// console.log(isLandscape(900, 800));

// function isLandscape(width, height) {
//   return width > height ? true : false;
// }

// fizzbuzz

// let outPut = fizzBuzz(15);
// console.log(outPut);
// function fizzBuzz(input) {
//   if (typeof input !== "number") return "not a number";
//   if (input % 3 === 0 && input % 5 === 0) return "fizzbuzz";
//   if (input % 3 === 0) return "fizz";
//   if (input % 5 === 0) return "buzz";

//   return input;
// }

// even and odd number

// evenOdd(15);
// function evenOdd(limit) {
//   for (let i = 0; i <= limit; i++) {
//     let message = i % 2 === 0 ? "even" : "odd";
//     console.log(i, message);
//   }
// }

// string property
// const movie = {
//   title: "dark",
//   year: 2018,
//   budget: 200000,
//   ditctor: "ali",
// };
// showProperty(movie);
// function showProperty(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === "string") console.log(key, obj[key]);
//   }
// }

// grade of student

// const mark = [80, 80, 80];
// console.log(showGrade(mark));
// function showGrade(marks) {
//   let sum = 0;
//   for (let mar of marks) {
//    sum += mar;
//   }
//   let average = sum / marks.length;
//   if (average < 60) {
//     return "F";
//   }
//   if (average < 70) {
//     return "d";
//   }
//   if (average < 80) {
//     return "c";
//   }
//   if (average < 90) {
//     return "b";
//   }
//   return "A";
// }

// Stars display
// showStar(1);
// function showStar(limit) {
//   for (let row = 1; row <= limit; row++) {
//     let pattern = "";
//     for (let i = 0; i < row; i++) {
//       pattern += "*";
//     }
//     console.log(pattern);
//   }
// }

primeNumber(7);
function primeNumber(limit) {
  for (let number = 2; number <= limit; number++) {
    let isPrime = true;
    for (let factor = 2; factor < number; factor++) {
      if (number % factor === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(number);
    }
  }
}
