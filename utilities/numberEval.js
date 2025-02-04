// Helper Functions to run various tests on the number
// Outputs are the values to the JSON object properties (number, is_prime, etc) returned

// Checks if the number is even
let numIsEven = (num) => {
  return num % 2 === 0 ? true : false;
};

/* Returns the sum of the digits that make up the number e.g num = 11, sum = 1 + 1 = 2
 */
let sumOfDigits = (num) => {
  if (String(num)[0] === "-") {
    num = String(num).replace("-", "");
  }
  return String(num)
    .split("")
    .reduce((sum, digit) => Number(sum) + Number(digit), 0);
};

// Checks if a number is/is not a prime number
let numIsPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

// Checks if a number is/is not a perfect square
let numIsPerfect = (num) => {
  return Math.floor(Math.sqrt(num)) === Math.sqrt(num);
};

/* Checks if a number is an armstrong number, an armstrong number is a number a number where the sum of the cubes of each digit that makes up the number is equal to the number (crazy stuff ikr...) E.g 
num = 371, 
sum = 3^3 + 7^3 + 1^3
sum = 27 + 343 + 1 = 371
*/
let armstrongNum = (num) => {
  return (
    String(num)
      .split("")
      .reduce(
        (sumOfCubes, digit) => sumOfCubes + Math.pow(Number(digit), 3),
        0
      ) === Number(num)
  );
};

module.exports = {
  numIsEven,
  sumOfDigits,
  numIsPrime,
  numIsPerfect,
  armstrongNum,
};
