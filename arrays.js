// const number = [1, 2, 1, 3, 4, 1];
// // add last
// number.push(5, 6);
// // add first
// number.unshift(0, 1);
// // add midle
// number.splice(2, 0, 8, 9);

// finding elements in primitive types
// let num = number.indexOf(4);
// let num = number.lastIndexOf(1);
// let num = number.includes(1);
// console.log(num);

// const person = [
//   { id: 1, name: "ali", address: "42 kamran" },
//   { id: 2, name: "raza", phoneNo: 1234 },
// ];
// let per = person.findIndex((element) => {
//   return element.id === 1;
// });
// console.log(per);

// remove elements in primitive

// const number = [1, 2, 3, 4, 5];

// let num = number.pop();
// console.log(number);
// console.log(num);

// let num = number.shift();
// console.log(number);
// console.log(num);

// let num = number.splice(2, 2);
// console.log(number);
// console.log(num);

// combining and slicing arrays

// const person = [1, 2, 3];
// const person1 = [4, 5, 6];

// let per = person.concat(person1);
// let perrr = per.slice(2, 4);
// console.log(perrr);

// eveery and some mothed

// const number = [4, -5];

// let numbers = number.every((num) => {
//   return num > 0;
// });

// let numbersss = number.some((num) => {
//   return num > 0;
// });
// console.log(numbers);
// console.log(numbersss);

// filter method
// let num = number.filter((value) => {
//   return value >= 0;
// });
// let html = num.map((val) => {
//   const obj = { value: val };
//   return obj;
// });
// // let item = html.join(" ");
// console, console.log(html);

// sum of array
// let sum = 0;
// for (let val of number) {
//   sum = sum + val;
// }

// sum with reduce method
// const number = [1, 2, 3]
// let sum = number.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);
// console.log(sum);

// function arrayFromArrange(min, max) {
//   let outPut = [];
//   for (let i = min; i <= max; i++) {
//     outPut.push(i);
//   }
//   return outPut;
// }
// let array = arrayFromArrange(-10, 4);
// console.log(array);

// checking given number is includes in array or not

// const number1 = [1, 2, 3, 4, 5];

// function checkNumber(array, num) {
//   for (let arr of array) if (arr === num) return true;
//   return false;
// }
// let num1 = checkNumber(number1, 9);
// console.log(num1);

// const number = [1, 1, 2, 2, 4, 5, 6];
// let num = expect(number, [1]);
// console.log(num);

// function expect(array, expected) {
//   let output = [];
//   for (let element of array)
//     if (!expected.includes(element)) output.push(element);

//   return output;
// }

// moving an elements

// const number1 = [1, 2, 3, 4, 5];

// function moveElements(array, index, offSet) {
//   let outPut = [...array];
//   const item = outPut.splice(index, 1)[0];
//   outPut.splice(index + offSet, 0, item);
//   return outPut;
// }

// let num = moveElements(number1, 1, 1);
// console.log(num);
// function occurrence(array, searchElement) {
//   array.reduce((acc, current) => {
//     let acc1 = current === searchElement;
//     return acc + acc1;
//   }, 0);
// }

// const number1 = maxNumber([1, 4, 6, 2, 3, 4]);
// console.log(number1);
// function maxNumber(array) {
//   if (array.lenght === 0) return undefined;
//   return array.reduce((a, b) => (a > b ? a : b));
// }
