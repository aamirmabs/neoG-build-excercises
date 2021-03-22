// 1. Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places. Example:
// Input: encodeString("neogcamp", 2) ––> Output: pgqiecor
// Explanation: 2 represents shifting alphabets by 2 places. a –> c, b –> d, c –> e and so on.

// const encodeString = (string, shiftBy) => {
//   let stringArray = string.split("");

//   let newStringArray = [];

//   for (let currentPos = 0; currentPos < stringArray.length; currentPos++) {
//     // get char code of character in the current position
//     const currentCharCode = string.charCodeAt(currentPos);

//     // get new character which is ahead of current character
//     const newChar = String.fromCharCode(currentCharCode + shiftBy);

//     // push new character into an array
//     newStringArray.push(newChar);
//   }

//   // join the new characters into a string
//   const newString = newStringArray.join("");
//   console.log(newString);
//   return newString;
// };

// encodeString("neogcamp", 2);
// encodeString("neogcamp", 5);

// 2. Given a sentence, return a sentence with first letter of all words as capital.
// Example:
// Input: toSentenceCase('we are neoGrammers') ––> Output: We Are NeoGrammers

// const toSentenceCase = (string) => {
//   let stringArray = string.split("");
//   const spacesArray = [];

//   // get positions of all the spaces preceding words in the string
//   for (let position = 0; position < string.length; position++) {
//     const char = string[position];
//     if (char == " ") {
//       spacesArray.push(position);
//     }
//   }

//   // converting all characters after spaces to upper case
//   for (let index = 0; index < spacesArray.length; index++) {
//     const charPostion = spacesArray[index] + 1;

//     stringArray[charPostion] = stringArray[charPostion].toUpperCase();
//   }

//   // converting the first character of the sentence to upper case
//   stringArray[0] = stringArray[0].toUpperCase();

//   const newString = stringArray.join("");

//   console.log(newString);
//   return newString;
// };

// toSentenceCase("we are neoGrammers");

// 3. Given an array of numbers, your function should return an array in the ascending order.
// Example:
// Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]

// const sortArray = (array) => {
//   for (let position = 0; position < array.length; position++) {
//     const mainElement = array[position];
//     let smallestElementLeft = mainElement;
//     let smallestElementPosition = -1;

//     // check if any element in the array after mainElement is smaller than it
//     for (let index = position; index < array.length; index++) {
//       const element = array[index];
//       if (element < smallestElementLeft) {
//         smallestElementLeft = element;
//         smallestElementPosition = index;
//       }
//     }

//     // if there is a smaller element exchange it with the mainElement
//     if (smallestElementLeft != mainElement) {
//       array[position] = smallestElementLeft;
//       array[smallestElementPosition] = mainElement;
//       console.log("After exchanging elements in loop " + position);
//       console.log(array);
//     } else {
//       console.log("No exchange in loop " + position);
//     }
//   }

//   console.log("Sorted array is:");
//   console.log(array);
//   return array;
// };

// sortArray([100, 83, 32, 9, 45, 61]);

// 4. Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.
// Example:
// Input: reverseCharactersOfWord('we are neoGrammers') –––> Output: ew era sremmarGoen

// const reverseWord = (word) => {
//   let reverseWord = [];
//   for (let position = word.length - 1; position >= 0; position--) {
//     const element = word[position];
//     reverseWord.push(element);
//   }

//   reverseWord = reverseWord.join("");
//   return reverseWord;
// };

// const reverseCharactersOfWord = (string) => {
//   let wordArray = string.split(" ");
//   let reversedWordArray = [];

//   for (let position = 0; position < wordArray.length; position++) {
//     reversedWordArray.push(reverseWord(wordArray[position]));
//   }

//   const reversedString = reversedWordArray.join(" ");
//   console.log(reversedString);
//   return reversedString;
// };

// reverseCharactersOfWord("we are neoGrammers");
