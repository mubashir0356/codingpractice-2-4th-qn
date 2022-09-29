const ratioOfTwoNumbers = require("../ratio/index");
const factorial = require("../factorial/index");

function ratioAndFactorial(num1, num2, num3) {
  let ratio = ratioOfTwoNumbers(num1, num2);
  let factorial = factorial(num3);
  return { ratio, factorial };
}

module.exports = ratioAndFactorial;
