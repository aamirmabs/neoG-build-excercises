// 1. Write a program that converts the string into uppercase

// const changeToUpperCase = (string) => {
//   let result = string.toUpperCase();
//   console.log(result);
//   return result;
// };

// changeToUpperCase("Hello");

// 2. Write a program that reads two strings and append first string to the second. So if first string is Good second string is Morning , the program should print MorningGood

// const appendStrings = (str1, str2) => {
//   let result = str2 + str1;
//   console.log(result);
//   return result;
// };

// appendStrings("abc", "def");

// 3. Program that reads string and count number of characters present in the string

// const lengthOf = (string) => {
//   return string.length;
// };

// console.log(lengthOf("abcde"));

// 4. Write a program that converts string like "124" to 124

// const stringToNum = (string) => {
//   return parseInt(string);
// };

// console.log(stringToNum("12345"));

// 5. Write a program to delete all vowels from a string. Assume string is not more than 80 characters long

// const removeVowels = (string) => {
//   string = string.replace(/a*e*i*o*u*/g, "");
//   // string = string.replace("a", "");
//   // string = string.replace("e", "");
//   // string = string.replace("i", "");
//   // string = string.replace("o", "");
//   // string = string.replace("u", "");

//   return string;
// };

// console.log(removeVowels("This is abcdefgh"));

// 6. Write a program to check whether the string is alphanumeric or not , eg:batman@45 contains digit 45

// const isAlphaNumeric = (string) => {
//   let stringArray = string.split("");

//   for (let index = 0; index < stringArray.length; index++) {
//     if (string.charCodeAt(index) >= 48 && string.charCodeAt(index) <= 57) {
//       console.log("String is alphanumeric");
//       return;
//     }
//   }
//   console.log("String is NOT alphanumeric");
// };

// isAlphaNumeric("batman@45");
// isAlphaNumeric("batman@AS");

// 7. A program that reads three strings and prints the longest and smallest one

// const longestAndShortestOf = (str1, str2, str3) => {
//   let longest = str1;
//   let shortest = str1;

//   if (str2.length > str1.length && str2.length > str3.length) {
//     longest = str2;
//   }
//   if (str3.length > str2.length && str3.length > str1.length) {
//     longest = str3;
//   }

//   if (str2.length < str1.length && str2.length < str3.length) {
//     shortest = str2;
//   }
//   if (str3.length < str2.length && str3.length < str1.length) {
//     shortest = str3;
//   }

//   console.log(`Longest: ${longest}\nShortest: ${shortest}`);

//   return longest, shortest;
// };

// longestAndShortestOf("abc", "abcd", "abcde");
// longestAndShortestOf("abcd", "abc", "abcde");
// longestAndShortestOf("abcd", "abc", "ab");

// 8. A program that counts number of vowels and consonants in a String?

// const vowelAndConsonantsIn = (string) => {
//   const allVowels = "aeiouAEIOU";

//   let vowels = 0;
//   let consonants = 0;

//   for (let i = 0; i < string.length; i++) {
//     if (allVowels.indexOf(string[i]) !== -1) {
//       vowels = vowels + 1;
//     } else consonants = consonants + 1;
//   }

//   console.log(`V: ${vowels}\nC: ${consonants}`);
//   return vowels, consonants;
// };

// vowelAndConsonantsIn("Write a program which receives a string");

// 9. Write a program which receives a string str that calculates the length of a string and return true if the length is greater than 7 without using strlen()

// const lengthOfString = (string) => {
//   let stringArray = [...string];
//   // console.log(stringArray);

//   let length = 0;

//   while (stringArray[length] !== undefined) {
//     console.log("Character: " + stringArray[length]);
//     length = length + 1;
//     console.log("Length: " + length);
//   }

//   console.log(length);
// };

// lengthOfString("This is a string");

// 10. Write a program that takes two strings and copies smaller string into bigger string

// const copySmallerToBigger = (str1, str2) => {
//   let result = "";

//   if (str1.length < str2.length) {
//     result = str2 + str1;
//   } else {
//     result = str1 + str2;
//   }

//   console.log(result);
//   return result;
// };

// copySmallerToBigger("abc", "defg");
// copySmallerToBigger("abcd", "efg");

// 11. Given a string, determine if it is a palindrome, considering only alphanumeric characters

// const isPalindrome = (str1) => {
//   let isPal = true;

//   let str1Array = [...str1];

//   for (
//     let i = 0, j = str1Array.length - 1;
//     i <= str1Array.length, j >= 0;
//     i++, j--
//   ) {
//     console.log(str1Array[i], str1Array[j]);
//     if (str1Array[i] !== str1Array[j]) {
//       isPal = false;
//       break;
//     }
//   }

//   isPal ? console.log("Is palindrome") : console.log("Is NOT palindrome");
// };

// isPalindrome("abcdcba");
// isPalindrome("abcdeba");

// 12. For a given input string(str), write a function to print all the possible substrings.Without using substr method

// const printSubStr = (string) => {
//   let totalLength = string.length;
//   let lastPosition = totalLength - 1;

//   let subStringArray = [];

//   // first loop will loop over the starting character
//   for (let i = 0; i <= lastPosition; i++) {
//     console.log(`--- LOOP ${i} ---`);
//     // loop to traverse string from start to end
//     for (let j = i; j <= lastPosition; j++) {
//       console.log("Start " + i + " Current End " + j + " Max " + lastPosition);

//       const subString = string.substr(i, j);

//       if (j != 0 && string.indexOf(subString) != -1)
//         subStringArray.push(subString);
//       console.log(subStringArray);
//     }
//   }
//   return subStringArray;
// };

// printSubStr("abcd");
// printSubStr("abcdef");

// 13. Write a program that removes the time from the given date string "Wed April 15, 7pm". It should return only the date without the time.

// const returnOnlyDate = (string) => {
//   let stringArray = [...string];
//   let returnString = "";

//   for (let i = 0; i < stringArray.length; i++) {
//     if (string.charCodeAt(i) == 44) {
//       break;
//     } else {
//       returnString = returnString + stringArray[i];
//     }
//   }
//   console.log(returnString);
//   return returnString;
// };

// returnOnlyDate("Wed April 15, 7pm");

// 14. Write a program that masks all but last four characters of the string "5565534276455423" to '#'

// const maskChars = (string) => {
//   let stringArray = [...string];
//   let lastCharPosition = stringArray.length - 1;
//   let lastMaskedCharPosition = lastCharPosition - 5;
//   let returnString = "";

//   for (let i = 0; i < lastCharPosition; i++) {
//     if (i <= lastMaskedCharPosition) returnString += "#";
//     else returnString += stringArray[i];

//     console.log(returnString);
//   }
//   console.log(returnString);
//   return returnString;
// };

// maskChars("5565534276455423");

// 15. Given a string "tic tac toe is a fun game" convert the first 6 characters to capital case

// const changeSixChars = (string) => {
//   let stringArray = [...string];
//   let arrayLength = stringArray.length;
//   let lastCAPSCharPosition = 5;
//   let returnString = "";

//   for (let i = 0; i < arrayLength; i++) {
//     if (i <= lastCAPSCharPosition)
//       returnString = returnString + string[i].toUpperCase();
//     else returnString = returnString + string[i];

//     console.log(returnString);
//   }

//   console.log(returnString);
//   return returnString;
// };

// changeSixChars("tic tac toe is a fun game");
