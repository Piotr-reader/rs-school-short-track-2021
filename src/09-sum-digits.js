/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let result = 0;
  let string = 0;
  let check = 0;
  let doubleCheck = 0;
  string = n.toString().split('');
  for (let i = 0; i < string.length; i++) {
    check += +string[i];
  }
  doubleCheck = check.toString().split('');
  if (doubleCheck.length > 1) {
    for (let i = 0; i < doubleCheck.length; i++) {
      result += +doubleCheck[i];
    }
  } else {
    result = check;
  }
  return result;
}

module.exports = getSumOfDigits;
