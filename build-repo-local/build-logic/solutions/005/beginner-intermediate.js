// 1. Find sum of an array and display the output .
// - Example [10,4,5,2,5,6,9].

// const sumOfArray = (array) => {
//   let sum = 0;
//   console.log(`Starting Sum: ${sum}`);

//   array.forEach((element) => {
//     sum = sum + element;
//     console.log(`Element: ${element} Sum: ${sum}`);
//   });

//   return sum;
// };

// sumOfArray([10, 4, 5, 2, 5, 6, 9]);

// 2. Find average of an array and display the output.

// const avgOfArray = (array) => {
//   let sum = 0;
//   console.log(`Starting Sum: ${sum}`);
//   let avg = undefined;

//   array.forEach((element) => {
//     sum = sum + element;
//     console.log(`Element: ${element} Sum: ${sum}`);
//   });

//   avg = (sum / array.length).toFixed(2);

//   console.log(`Sum: ${sum} Total Elements: ${array.length} Avg: ${avg}`);

//   return avg;
// };

// avgOfArray([10, 4, 5, 2, 5, 6, 9]);

// 3. Find maximum and minimum of an array.

// const maxAndMin = (array) => {
//   let max = array[0];
//   let min = array[0];

//   console.log(`Initial Max: ${max} Min: ${min}`);

//   array.forEach((element) => {
//     if (element > max) {
//       max = element;
//     }
//     if (element < min) {
//       min = element;
//     }
//     console.log(`Element: ${element} Max: ${max} Min: ${min}`);
//   });

//   return max, min;
// };

// maxAndMin([10, 4, 5, 2, 5, 6, 9]);

// 4. Find Median and Mode of an array.
// - Median : (N+1/2)th term.
// - Mode : Most repeating term

// 5. Find sum of two arrays.
// - [3,5,2,9,4] = 3+5+2+9+4 = 23
// - [6,2,8,1,3] = 6+2+8+1+3 = 20
// Final Output : 20+23 = 43

// const sumOfArray = (array) => {
//   let sum = 0;

//   array.forEach((element) => {
//     sum = sum + element;
//   });

//   console.log(`Sum of array ${array} is ${sum}`);
//   return sum;
// };

// const twoArraySum = (arr1, arr2) => {
//   let sum = sumOfArray(arr1) + sumOfArray(arr2);
//   console.log(`Sum of both arrays is ${sum}`);
// };

// twoArraySum([10, 1, 2, 3, 4], [7, 8, 9, 1, 15, 6]);

// 6. Find number of constants and vowels in a string.

// const vowelAndConsonantsIn = (string) => {
//   const allVowels = "aeiouAEIOU";

//   let vowels = 0;
//   let vowelArray = [];
//   let consonants = 0;
//   let consonantsArray = [];

//   for (let i = 0; i < string.length; i++) {
//     if (allVowels.indexOf(string[i]) !== -1) {
//       vowels = vowels + 1;
//       vowelArray = vowelArray + string[i];
//     } else {
//       consonants = consonants + 1;
//       if (string[i] !== " ") {
//         consonantsArray = consonantsArray + string[i];
//       }
//     }
//   }

//   console.log(
//     `V: ${vowels} Array: ${vowelArray}\nC: ${consonants} Array: ${consonantsArray}`
//   );
//   return vowels, consonants;
// };

// vowelAndConsonantsIn("Write a program which receives a string");

// 7. Shift an array by X to right.
// - Example [1,2,3,4,5] after shifting to right [5,1,2,3,4]

const cyclicRotation = (string, rotateBy) => {
  let numArray = string.split("");
  const numLength = numArray.length;
  let rotatedArray = [];

  // check if rotateBy value is valid and lesser than string length
  if (rotateBy % string > 0) {
    rotateBy = rotateBy % string;
  }

  let startPosition = numLength - rotateBy;

  // copying part of the string after rotation point
  for (let i = startPosition; i < numLength; i++) {
    rotatedArray.push(numArray[i]);
  }

  // copying the part before the rotation point
  for (let i = 0; i < startPosition; i++) {
    rotatedArray.push(numArray[i]);
  }

  const rotatedNumber = rotatedArray.join("");
  console.log(rotatedNumber);
  return rotatedNumber;
};

cyclicRotation("abc", 1);
cyclicRotation("abcd", 3);
cyclicRotation("Tic Tac Toe.", 5);
