// 1. Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".
// Your output should look something like this 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17 .....

// const fizzBuzz = () => {
//   let resultArray = [];
//   for (let index = 1; index <= 100; index++) {
//     // console.log("Value: " + index);
//     let valueToSave = undefined;

//     if (index % 3 == 0 && index % 5 == 0) {
//       valueToSave = "FizzBuzz";
//     } else if (index % 3 == 0) {
//       valueToSave = "Fizz";
//     } else if (index % 5 == 0) {
//       valueToSave = "Buzz";
//     } else {
//       valueToSave = index;
//     }
//     resultArray.push(valueToSave);
//     console.log(valueToSave);
//   }

//   return resultArray;
// };

// fizzBuzz();

// 2. Print the following star pattern :-

// *
// * *
// * * *
// * * * *
// * * * * *

// const printStarPattern = () => {
//   for (let index = 1; index <= 5; index++) {
//     let string = "";

//     for (let noOFStars = 1; noOFStars <= index; noOFStars++) {
//       string = string + "*";
//     }

//     console.log(string);
//   }
// };

// printStarPattern();

// 3. Write a program to take a number input from user and print multiplication table 12 times for that number.

// const printMultiplicationTable = (number) => {
//   for (let index = 1; index <= 12; index++) {
//     console.log(`${number} X ${index} = ${number * index}`);
//   }
// };

// printMultiplicationTable(5);
// printMultiplicationTable(8);

// 4. Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....

// const printFibonacci = () => {
//   let number1 = 0;
//   let number2 = 1;

//   console.log(number1);

//   for (let index = 0; index <= 10; index++) {
//     console.log(number2);

//     let sum = number1 + number2;
//     number1 = number2;
//     number2 = sum;
//   }
// };

// printFibonacci();

// 5. Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120

// const findFactorial = (number) => {
//   let factorial = 1;

//   for (let index = number; index > 0; index--) {
//     factorial = factorial * index;
//   }

//   console.log(factorial);
// };

// findFactorial(5);
// findFactorial(6);
// findFactorial(8);

// 6. Write a Program to take a number input from user and find if the number is Prime or not.

// const isPrime = (number) => {
//   let flag = true;
//   let divisibleBy = 1;

//   for (let index = 2; index < number; index++) {
//     if (number % index == 0) {
//       flag = false;
//       divisibleBy = index;
//       break;
//     }
//   }

//   if (flag) {
//     console.log(`Number ${number} is prime.`);
//     return true;
//   } else {
//     console.log(
//       `Number ${number} is NOT prime. It is divisible by ${divisibleBy}`
//     );
//     return false;
//   }
// };

// isPrime(45);
// isPrime(49);
// isPrime(29);

// 7. Write a program to take a day as an input and determine whether it is a weekday or weekend. Example: Tuesday is weekday.

const isWeekday = (userInput) => {
  let originalInput = userInput;
  let trimInput = userInput.trim().toLowerCase();

  let isItWeekday = undefined;

  switch (trimInput) {
    case "monday":
      isItWeekday = true;
      break;
    case "tuesday":
      isItWeekday = true;
      break;
    case "wednesday":
      isItWeekday = true;
      break;
    case "thursday":
      isItWeekday = true;
      break;
    case "friday":
      isItWeekday = true;
      break;
    case "saturday":
      isItWeekday = false;
      break;
    case "sunday":
      isItWeekday = false;
      break;
    default:
      console.log(
        "Invalid input. Please provide input as 'Sunday' or 'Monday'"
      );
      break;
  }

  if (isItWeekday == true) {
    console.log(`The input provided ${originalInput} is a weekday.`);
  } else if (isItWeekday == false) {
    console.log(`The input provided ${originalInput} is NOT a weekday.`);
  }
};

isWeekday("Sunday");
isWeekday("monday");
