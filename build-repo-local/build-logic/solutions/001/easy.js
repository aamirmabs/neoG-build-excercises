// Operators, Branching and Looping Solutions

// 1. Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.

// const sumOfFive = (a, b, c, d, e) => {
//   return a + b + c + d + e;
// };

// console.log(sumOfFive(1, 2, 3, 4, 5));

// 2. Write a program to take a number input from user and determine whether the number is odd or even.

// const isOddOrEven = (a) => {
//   let result = "";
//   a % 2 == 0 ? (result = "even") : (result = "odd");
//   return result;
// };

// console.log(isOddOrEven(14));
// console.log(isOddOrEven(15));

// 3. Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.

// const getMaxAndMin = (a, b) => {
//   let max,
//     min,
//     areEqual = false;

//   if (a > b) {
//     max = a;
//     min = b;
//   } else if (a < b) {
//     max = b;
//     min = a;
//   } else {
//     areEqual = true;
//   }

//   console.log(`Num 1: ${a}, Num 2: ${b}`);

//   const minMaxString = `Max: ${max}, Min: ${min}`;
//   const equalString = `Are they equal? - Yes`;

//   if (areEqual) console.log(equalString);
//   else console.log(minMaxString);
// };

// getMaxAndMin(3, 6);
// getMaxAndMin(6, 6);

// 4. Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.

// const maxOfThree = (a, b, c) => {
//   let max;

//   if (a > b && a > c) max = a;
//   else if (b > a && b > c) max = b;
//   else if (c > a && c > b) max = c;
//   else if (max == undefined) console.log("Two or more numbers are equal");

//   if (max && true) console.log(max);
// };

// maxOfThree(8, 23, 17);
// maxOfThree(10, 30, 30);

// 5. Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.

// const minOfThree = (a, b, c) => {
//   let min;

//   if (a < b && a < c) min = a;
//   else if (b < a && b < c) min = b;
//   else if (c < a && c < b) min = c;
//   else if (min == undefined) console.log("Two or more numbers are equal");

//   if (min && true) console.log(min);
// };

// minOfThree(8, 23, 17);
// minOfThree(35, 29, 46);

// 6. Write program to take a month as an input from the user and find out whether the month has 31 days or not.

const doesMonthHave31Days = (monthNumber) => {
  let monthName = "";
  let noOfDaysInMonth = -1;
  let has31Days = null;

  switch (monthNumber) {
    case 1:
      monthName = "January";
      noOfDaysInMonth = 31;
      has31Days = true;
      break;
    case 2:
      monthName = "February";
      noOfDaysInMonth = 28;
      has31Days = false;
      break;
    case 3:
      monthName = "March";
      noOfDaysInMonth = 31;
      has31Days = true;
      break;
    case 4:
      monthName = "April";
      noOfDaysInMonth = 30;
      has31Days = false;
      break;
    case 5:
      monthName = "May";
      noOfDaysInMonth = 31;
      has31Days = true;
      break;
    case 6:
      monthName = "June";
      noOfDaysInMonth = 30;
      has31Days = false;
      break;
    case 7:
      monthName = "July";
      noOfDaysInMonth = 31;
      has31Days = true;
      break;
    case 8:
      monthName = "August";
      noOfDaysInMonth = 31;
      has31Days = true;
      break;
    case 9:
      monthName = "September";
      noOfDaysInMonth = 30;
      has31Days = false;
      break;
    case 10:
      monthName = "October";
      noOfDaysInMonth = 31;
      has31Days = true;
      break;
    case 11:
      monthName = "November";
      noOfDaysInMonth = 30;
      has31Days = false;
      break;
    case 12:
      monthName = "December";
      noOfDaysInMonth = 31;
      has31Days = true;
      break;

    default:
      monthName = undefined;
      noOfDaysInMonth = undefined;
      has31Days = undefined;
      break;
  }

  if (monthName == undefined && noOfDaysInMonth == undefined) {
    console.log("Invalid parameter entered.");
    return false;
  } else {
    console.log("Entered month number is: " + monthNumber);

    console.log("Equivalent month is: " + monthName);
    has31Days
      ? console.log(monthName + " has 31 days.")
      : console.log(monthName + " does not have 31 days.");

    return true;
  }
};

// let inputMonthNumber = readline();
doesMonthHave31Days(1);
doesMonthHave31Days(2);
doesMonthHave31Days(3);
