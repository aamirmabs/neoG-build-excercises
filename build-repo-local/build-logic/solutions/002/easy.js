// 1. Given a and b, your function should return the value of a^b
// Example:
// Input: power(2,3) ––> Output: 8

// const power = (a, b) => {
//   let result = a;

//   for (let i = 2; i <= b; i++) {
//     result = result * a;
//   }

//   console.log(result);

//   return result;
// };

// power(2, 3);
// power(3, 5);

// 2. Given length of a regular hexagon, your function should return area of the hexagon.
// Example:
// Input: areaOfHexagon(10) ––> Output: 259.80

// const areaOfHexagon = (sides) => {
//   let area = ((3 * Math.sqrt(3) * sides * sides) / 2).toFixed(2);
//   console.log(area);
// };

// areaOfHexagon(10);

// 3. Given a sentence, your functions should return the number of words in the sentence.
// Example:
// Input: noOfWords(We are neoGrammers) ––> Output: 3

// const noOfWords = (string) => {
//   let array = Array.from(string);
//   let wordCount = 1;
//   // wordCount is set to 1 assuming that the sentence will not have a trailing space and as we are counting the spaces to count the words, we will miss that last word

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] == " ") {
//       wordCount++;
//     }
//   }

//   console.log(wordCount);
//   return wordCount;
// };

// noOfWords("We are neoGrammers");
// noOfWords("This is just the beginning");

// 4. Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMin(3,5) ––> Output: 3
// Input: findMin(3,5,9,1) ––> Output: 1
// (Hint: Lookup rest parameters in JavaScript)

// function findMin() {
//   let totalArgs = arguments.length;

//   let min = arguments[0];
//   for (let i = 0; i < totalArgs; i++) {
//     if (arguments[i] < min) {
//       min = arguments[i];
//     }
//   }

//   console.log(min);
//   return min;
// }

// findMin(3, 5);
// findMin(3, 5, 9, 1);
// findMin(3, 5, 9, 100, 6, 7, 35);

// 5. Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMax(3,5) ––> Output: 5
// Input: findMax(3,5,9,1) ––> Output: 9
// (Hint: Lookup rest parameters in JavaScript)

// function findMax() {
//   let totalArgs = arguments.length;

//   let max = arguments[0];
//   for (let i = 0; i < totalArgs; i++) {
//     if (arguments[i] > max) {
//       max = arguments[i];
//     }
//   }

//   console.log(max);
//   return max;
// }

// findMax(3, 5);
// findMax(3, 5, 9, 1);
// findMax(3, 5, 9, 100, 6, 7, 35);

// 6. Given three angles of a triangle, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all. Example:
// Input: typeOfTriangle(30, 60, 90) ––> Output: Scalene Triangle

// const typeOfTriangle = (angle1, angle2, angle3) => {
//   let triangleType = "";

//   if (angle1 + angle2 + angle3 == 180) {
//     if (angle1 == 60 && angle2 == 60 && angle3 == 60) {
//       triangleType = "Equilateral";
//     } else if (angle1 == angle2 || angle1 == angle3) {
//       triangleType = "Isosceles";
//     } else {
//       triangleType = "Scalene";
//     }
//     console.log(triangleType);
//     return triangleType;
//   } else {
//     console.log("Angles entered do not form a triangle.");
//     exit();
//   }
// };

// typeOfTriangle(60, 60, 60);
// typeOfTriangle(70, 70, 40);
// typeOfTriangle(80, 60, 40);
