// Question = 1
// function addNumbers(num1, num2) {
//   return num1 + num2;
// }
// console.log(addNumbers(2, 3));
// console.log(addNumbers(5, 1));
// console.log(addNumbers(10, 20));
// console.log(addNumbers(-5, 5));
// console.log(addNumbers(0, 0));

// <----------------><----------------------------->
//  Question = 2

// function toUpper(str) {
//   return str.toUpperCase();
// }
// console.log(toUpper("hello"));
// console.log(toUpper("world"));
// console.log(toUpper("Abdul basit"));
// console.log(toUpper("pakhtton"));
// console.log(toUpper("my world"));

// <-----------------------------><---------------------------->
// Question = 3
// function averageArray(arr) {
//   if (arr.length === 0) return 0;
//   const sum = arr.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     0
//   );
//   return sum / arr.length;
// }
// console.log(averageArray([1, 2, 3]));
// console.log(averageArray([5, 5, 5]));
// console.log(averageArray([10, 20, 30, 40]));
// console.log(averageArray([2, 4, 6, 8, 10]));
// console.log(averageArray([]));

// <_---------------------------------------></_--------------------------------------->
//  Question = 4
// function removeVowels(str) {
//   return str.replace(/[aeiouAEIOU]/g, "");
// }
// console.log(removeVowels("hello world"));
// console.log(removeVowels("javascript"));
// console.log(removeVowels("SMIT"));
// console.log(removeVowels("peshawer"));
// console.log(removeVowels("This is a test string."));

// <--------------------------------------------><----------------------------------------->
// Question = 5
//   .>    > Loop approch

// function factorialLoop(n) {
//   if (n === 0 || n === 1) return 1;
//   let result = 1;
//   for (let i = n; i > 1; i--) {
//     result *= i;
//   }
//   return result;
// }
// console.log(factorialLoop(5));
// console.log(factorialLoop(3));
// console.log(factorialLoop(0));
// console.log(factorialLoop(7));

// > Recursive Approach:

// function factorialRecursive(n) {
//   if (n === 0 || n === 1) return 1;
//   return n * factorialRecursive(n - 1);
// }
// console.log(factorialRecursive(5));
// console.log(factorialRecursive(3));
// console.log(factorialRecursive(0));
// console.log(factorialRecursive(7));

// <-----------------------------------------------><----------------------------->
// Question = 6

// Loop Approach:

// function reverseStringLoop(str) {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }
// console.log(reverseStringLoop("hello"));
// console.log(reverseStringLoop("world"));
// console.log(reverseStringLoop("JavaScript"));
// console.log(reverseStringLoop("basit"));
// console.log(reverseStringLoop("khattak"));

// Recursive Approach

function reverseStringRecursive(str) {
  if (str === "") return "";
  return reverseStringRecursive(str.substr(1)) + str[0];
}

console.log(reverseStringRecursive("hello"));
console.log(reverseStringRecursive("world"));
console.log(reverseStringRecursive("SMIT"));
console.log(reverseStringRecursive("pakistan"));
console.log(reverseStringRecursive("basit"));

// <--------------------------------------><--------------------------------------------->
