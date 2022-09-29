const ratioOfTwoNumbers = require("../ratio/index.js");
const factorial = require("../factorial/index");

function ratioAndFactorial(num1, num2, num3) {
  let ratioOfTwoNumbers = ratioOfTwoNumbers(num1, num2);
  let factorialOfNum3 = factorial(num3);
  return {
    ratio: ratioOfTwoNumbers,
    factorial: factorialOfNum3,
  };
}

module.exports = ratioAndFactorial;
