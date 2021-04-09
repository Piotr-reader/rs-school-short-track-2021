/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0;
  const columnLenght = matrix[0].length;
  for (let i = 0; i < columnLenght; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (j > 0) {
        if (matrix[j - 1][i] !== 0) {
          result += matrix[j][i];
        }
      } else {
        result += matrix[j][i];
      }
    }
  }
  return result;
}

module.exports = getMatrixElementsSum;
