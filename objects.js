// const circle = {
//   raduis: 1,
//   location: {
//     x: 1,
//     y: 4,
//   },
//   isTrue: false,
//   draw: function () {
//     console.log("hello word");
//   },
// };
// circle.draw();

//factory funcation

// let cir = drawCircle(1);
// console.log(cir);
// function drawCircle(raduis) {
//   return {
//     raduis: raduis,
//     draw() {
//       console.log("hello word ");
//     },
//   };
// }

//constructor function
// const myCircle = new Circle(3);
// console.log(myCircle);

// function Circle(raduis) {
//   this.raduis = raduis;
//   this.draw = function () {
//     console.log("hello word");
//   };
// }

// nature of objects

// const circle = {
//   raduis: 1,
// };
// circle.color = "red";
// circle.draw = function () {
//   console.log("hello");
// };
// delete circle.color;
// delete circle.draw;
// console.log(circle);

// value/primitive and reference types
// let x = { value: 11 };

// function increase(number) {
//   number.value++;
// }
// increase(x);
// console.log(x);

// cloning a object

// const circle = {
//   raduis: 2,
//   draw() {
//     console.log("hello word");
//   },
// };

// //const another = Object.assign({ color: "red" }, circle);
// const another = { ...circle, color: "red", width: 30 };
// console.log(another);

// function showAddress(street, city, zipCode) {
//   return {
//     street: street,
//     city: city,
//     zipCode: zipCode,
//   };
// }
// let add = showAddress(24, "lahore", 12333);
// console.log(add);
// function Saddress(street, city, zipCode) {
//   (this.street = street), (this.city = city), (this.zipCode = zipCode);
// }
// let add1 = new Saddress(23, "lahore", 3455);
// let add2 = new Saddress(23, "lahore", 3455);

// console.log(areEqual(add1, add2));
// console.log(areSame(add1, add2));

// function areEqual(addr1, addr2) {
//   return (
//     addr1.street === addr2.street &&
//     addr1.city === addr2.city &&
//     addr1.zipCode === addr2.zipCode
//   );
// }
// function areSame(addr1, addr2) {
//   return addr1 === addr2;
// }

const post = {
  title: "a",
  body: "b",
  author: "c",
  views: 10,
  comments: [
    { author: "f", body: "h" },
    {
      author: "r",
      body: "o",
    },
  ],
  iLive: true,
};
console.log(post);
