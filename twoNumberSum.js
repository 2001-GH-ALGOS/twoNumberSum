//Brute force solution - while loop
function twoNumberSum(array, targetSum) {
  let i = 0;
  let j = 1;
  let currentNum = array[i];
  while (array.length) {
    if (currentNum + array[j] === targetSum) {
      return [currentNum, array[j]];
      break;
    } else {
      j++;
    }
    if (j === array.length) {
      i++;
      currentNum = array[i];
      j = i + 1;
    }
    if (i === array.length) {
      return [];
    }
  }
}
