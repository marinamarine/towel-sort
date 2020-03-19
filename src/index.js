module.exports = function towelSort(matrix) {

  let resultArr = [];
  if (matrix && matrix.length) {
    matrix.forEach((value, i) =>
      resultArr = (i % 2) ?
        resultArr.concat(...value.reverse()) :
        resultArr.concat(...value)
    );
  }
  return resultArr;
}
