// 1. Write a program to input 2 numbers and display the sum of the numbers to the console.

// Input Number 1: 20
// Input Number 2: 40
// Sum : 60

// const sum = (a, b) => {
//   console.log(a + b);
// };

// sum(5, 9);

// 2. Write a JavaScript program to calculate the simple interest given P,R,T with the given formula. Formula: SI = (P * T * R) / 100 Where: P = principal amount T = time R = rate SI = simple interest

// Input: P=100, R=6%, T=2
// Output: 12

// const simpleInterest = (p, r, t) => {
//   const si = (p * r * t) / 100;
//   console.log(si);
//   return si;
// };

// simpleInterest(100, 6, 2);

// 3. Write a program to calculate the kinetic energy of a body with mass 'm' and volume 'v'.

// Formula : 0.5 * m * v * v

// const kineticEnergy = (m, v) => {
//   const energy = 0.5 * m * v * v;
//   console.log(energy);
//   return energy;
// };

// kineticEnergy(10, 1.335);

// 4. Write a program to convert Fahrenheit to Celsius. For Celsius to Fahrenheit conversion use: T = 9*T/5 + 32 'T' is the temperature on the Celsius scale.

// Input: 56
// Output: 13.33333

// const fToC = (f) => {
//   const c = ((f - 32) * 5) / 9;
//   console.log(c);
//   return c;
// };

// fToC(56);

// 5. Calculate the area, perimeter of a square of side 'a'. Also, calculate the surface area and the volume of a cube of side 'a'.

// Formula :
// Area: a*a
// Perimeter: 4*a
// Surface Area: 6*a*a
// Volume: a*a*a

// const squareCube = (a) => {
//   const area = a * a;
//   const perimeter = 4 * a;
//   const surfaceArea = 6 * a * a;
//   const volume = a * a * a;

//   const parameters = { area, perimeter, surfaceArea, volume };
//   console.log(parameters);

//   return area, perimeter, surfaceArea, volume;
// };

// squareCube(4);

// 6. Given the Cost Price(CP) and Selling Price(SP) of a product. Write a Program to Calculate the Profit or Loss.

// Input: CP = 1500, SP = 2000
// Output: 500 Profit

// Input: CP = 3125, SP = 1125
// Output: 2000 Loss

// const pnl = (cp, sp) => {
//   let diff = sp - cp;
//   let result = "";

//   if (diff > 0) {
//     result = `${diff} Profit`;
//   } else if (diff < 0) {
//     result = `${diff} Loss`;
//   } else if (cp == sp) {
//     result = `No profit or loss`;
//   }
//   console.log(result);
//   return result;
// };

// pnl(1500, 2000);
// pnl(3125, 1125);
// pnl(1000, 1000);

// 7. Write a program to calculate sum of N natural digits, as input by the users?

// Enter a positive integer: 100
// Sum = 5050

// const sumOfN = (n) => {
//   let sum = -1;

//   if (n < 1) {
//     sum = "Invalid number";
//   } else {
//     for (let i = 0; i <= n; i++) {
//       sum = sum + i;
//     }
//   }

//   console.log(sum);
//   return sum;
// };

// sumOfN(100);

// 8. Write a Program to Print N Odd Number in Descending Order.

// Input : 4
// Output : 1
// 3
// 5
// 7

// 9. Write a JavaScript program to compute the sum of all digits that occur in a given string.

// Input: 1234
// Output: 1+2+3+4 = 10

// const sumOfDigitsInString = (string) => {
//   const stringArray = string.split("");
//   let digitArray = [];
//   let sumOfDigits = 0;

//   for (let i = 0; i < stringArray.length; i++) {
//     // check if the character code is in the range of digits 0 - 9
//     // 0 = 48 and /
//        /    9 = 57

//     const charCode = string.charCodeAt(i);
//     if (charCode >= 48 && charCode <= 57) {
//       digitArray.push(stringArray[i]);
//       sumOfDigits = sumOfDigits + parseInt(stringArray[i]);
//     }
//   }

//   console.log(
//     `Sum of digits ${digitArray.join(
//       ""
//     )} from string ${string} is ${sumOfDigits}`
//   );

//   return sumOfDigits;
// };

// sumOfDigitsInString("12ab34");

// 10. Write a JavaScript program that reverses a number.

// Example:

// Input:  32243;
// Output:  34223

// const reverseNumber = (number) => {
//   let numberArray = number.toString().split("");
//   let reverseArray = [];
//   let reversedNumber = "";

//   for (let i = numberArray.length; i > 0; i--) {
//     reverseArray.push(numberArray[i - 1]);
//   }

//   reversedNumber = reverseArray.join("");

//   console.log("Original number: " + number);
//   console.log("Reversed number: " + reversedNumber);
//   return reversedNumber;
// };

// reverseNumber(12345);

// 11. Write a Program to cyclically Rotate a Number by X positions in the left direction, as provided by the user.

// Example-

// Enter a Number : 1234
// Enter the Number of Rotations : 2
// Output : 3412

// const cyclicRotation = (number, rotateBy) => {
//   let numArray = number.toString().split("");
//   const numLength = numArray.length;
//   let rotatedArray = [];

//   // check if rotateBy value is valid and lesser than number length
//   if (rotateBy % number > 0) {
//     rotateBy = rotateBy % number;
//   }

//   let startPosition = numLength - rotateBy;

//   // copying part of the string after rotation point
//   for (let i = startPosition; i < numLength; i++) {
//     rotatedArray.push(numArray[i]);
//   }

//   // copying the part before the rotation point
//   for (let i = 0; i < startPosition; i++) {
//     rotatedArray.push(numArray[i]);
//   }

//   const rotatedNumber = rotatedArray.join("");
//   console.log(rotatedNumber);
//   return rotatedNumber;
// };

// cyclicRotation(12345, 1);
// cyclicRotation(12345, 2);
// cyclicRotation(12345, 3);

// 12. Write a Program to convert Decimal to Binary.

// Enter the number to convert: 5
// Binary of Given Number is=101
// Follow up Question : Write a Program to Convert Octal to Decimal.

// Enter an octal number: 116
// Octal of Given Number = 78 in decimal

// const decimalToBinary = (number) => {
//   let decimalArray = [];
//   let remainder = number;
//   let loop = 0;

//   while (remainder > 0) {
//     let digit = remainder % 2;
//     decimalArray.unshift(digit);
//     loop = loop + 1;
//     console.log("loop: " + loop);
//     console.log(decimalArray);
//     if (remainder % 2 == 0) {
//       remainder = remainder / 2;
//     } else {
//       remainder = Math.floor(remainder / 2);
//     }
//   }

//   const binaryString = "0b" + decimalArray.join("");
//   console.log(binaryString);
//   return binaryString;
// };

// decimalToBinary(6);

// const power = (a, b) => {
//   let result = a;
//   if (b == 1 || b == 0) {
//     return a;
//   } else {
//     for (let i = 2; i <= b; i++) {
//       result = result * a;
//     }
//   }
//   console.log(`${a}^${b} = ${result}`);
//   return result;
// };

// const octalToDecimal = (octal) => {
//   let octalArray = octal.toString().split("");
//   let result = 0;
//   let positionCounter = 0;

//   for (let i = octalArray.length - 1; i >= 0; i--) {
//     console.log("Loop " + positionCounter + ": ");
//     result = result + octalArray[i] * power(8, positionCounter);
//     console.log(result);
//     positionCounter++;
//   }
// };

// octalToDecimal(116);
