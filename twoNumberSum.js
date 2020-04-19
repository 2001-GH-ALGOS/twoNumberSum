/*
Brute Force Solution A - nested for loop
Time: O(N^2)
Space: O(1)
*/
function twoNumberSumA(array, targetSum) {
  let finalArr = [];
  for (let i = 0; i < array.length - 1; i++) {
    let firstEl = array[i];

    for (let j = i + 1; j < array.length; j++) {
      let secondEl = array[j];

      if (firstEl + secondEl === targetSum) {
        finalArr.push(firstEl, secondEl);
      }
    }
  }
  return finalArr;
}

/*
Brute Force Solution B - while loop
Time: O(N)
Space: O(1)
*/
function twoNumberSumB(array, targetSum) {
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

/*
Brute Force Solution C - using difference of targetSum and each num in given array
Time: O(N^2)
Space: O(1)
*/
function twoNumberSumC(array, targetSum) {
  let finalArr = [];
  for (let i = 0; i < array.length; i++) {
    let firstNum = array[i];
    if (array.includes(targetSum - firstNum)) {
      if (firstNum !== targetSum - firstNum) {
        finalArr.push(firstNum, targetSum - firstNum);
        break;
      }
    }
  }
  return finalArr;
}

/*
Optimized Solution - using hash table to save every number in hash table, solving for each difference,
and checking if the difference is stored in the hash table.
Time: O(N)
Space: O(1)
*/
function twoNumberSumD(array, targetSum) {
  let numbers = {};
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let currentNum = array[i];
    if (!numbers[targetSum - currentNum]) {
      numbers[currentNum] = true;
    } else {
      result.push(currentNum, targetSum - currentNum);
    }
  }
  return result;
}

/*
Optimized Solution - sort the array and have two pointers at both ends of the array, narrowing the search area with each iteration
Time: O(nlog(n))
Space: O(1)
*/
function twoNumberSumE(array, targetSum) {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    const currentSum = array[left] + array[right];
    if (currentSum === targetSum) {
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      left++;
    } else if (currentSum > targetSum) {
      right--;
    }
  }
  return [];
}
