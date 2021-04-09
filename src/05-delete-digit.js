/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

function deleteDigit(n) {
  const result = n.toString().split('');
  const numberMax = n.toString().split('');
  let indexDel = [];
  numberMax.sort((a, b) => b - a);

  for (let i = 0; i < result.length; i++) {
    if (result[i] === numberMax[0]) {
      indexDel = i - 1;
    }
  }
  result.splice(indexDel, 1);
  return Number(result.join(''));
}

module.exports = deleteDigit;
