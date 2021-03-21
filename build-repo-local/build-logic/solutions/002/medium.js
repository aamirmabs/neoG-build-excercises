// 1. Given an array, your function should return the length of the array.
// Example:
// Input: arrayLength([1,5,3,7,8]) ––> Output: 5

// function arrayLength(array) {
//   let length = arguments[0].length;
//   console.log(length);
// }

// arrayLength([1, 5, 3, 7, 8]);

// 2. Given an array and an item, your function should return the index at which the item is present.
// Example:
// Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2

// const indexOf = (array, item) => {
//   for (let position = 0; position < array.length; position++) {
//     if (array[position] == item) {
//       console.log(
//         `Item ${item} found in array ${array} at position ${position}`
//       );
//       return position;
//     }
//   }

//   return `Item ${item} not found in array ${array}`;
// };

// indexOf([1, 6, 3, 5, 8, 9], 3);

// 3. Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
// Example:
// Input: replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]

// const replace = (array, replaceValue, newValue) => {
//   let newArray = [];

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] == replaceValue) {
//       newArray.push(newValue);
//     } else {
//       newArray.push(array[i]);
//     }
//   }

//   console.log(newArray);
//   return newArray;
// };

// replace([1, 5, 3, 5, 6, 8], 5, 10);

// 4. Given two arrays, your function should return single merged array.
// Example:
// Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]

// const mergeArray = (array1, array2) => {
//   const newArray = [...array1, ...array2];
//   console.log(newArray);
//   return newArray;
// };

// mergeArray([1, 3, 5], [2, 4, 6]);

// 5. Given a string and an index, your function should return the character present at that index in the string.
// Example:
// Input: charAt("neoGcamp", 4) ––> Output: c

// const charAt = (string, index) => {
//   let stringArray = [...string];
//   let charAtPosition = stringArray[index];

//   console.log(charAtPosition);
//   return charAtPosition;
// };

// charAt("neoGcamp", 4);

// 6. Given two dates, your function should return which one comes before the other.
// Example:
// Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021

// const minDate = (dateA, dateB) => {
//   dateA = dateA.split(`/`);
//   let [dateA_dd, dateA_mm, dateA_yyyy] = dateA;

//   dateB = dateB.split(`/`);
//   let [dateB_dd, dateB_mm, dateB_yyyy] = dateB;

//   if (dateA_yyyy < dateB_yyyy) {
//     return dateA.join("/");
//   } else if (dateA_mm < dateB_mm && dateA_yyyy == dateB_yyyy) {
//     return dateA.join("/");
//   } else if (dateA_dd < dateB_dd && dateA_mm == dateB_mm) {
//     return dateA.join("/");
//   } else if (
//     dateA_yyyy == dateB_yyyy &&
//     dateA_mm == dateB_mm &&
//     dateA_dd == dateB_dd
//   ) {
//     return "Both dates are equal";
//   } else {
//     return dateB.join("/");
//   }
// };

// console.log(minDate("02/05/2021", "24/01/2021"));
// console.log(minDate("02/05/2021", "02/05/2021"));
