//eqArrays function
const eqArrays = function(array1,array2) {
  let outcome;
  for (let i in array1) {
    if (array1[i] !== array2[i]) {
      return false;
    } else {
      outcome = true;
    }
  }
  return outcome;
};

const assertArraysEqual = function(array1,array2) {
  if (eqArrays(array1,array2)) {
    console.log(`💚 Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`💔 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const middle = function(array) {
  let middleItems = [];
  const arrayMiddleIndex = Math.ceil(array.length / 2) - 1;
  // console.log(arrayMiddleIndex);
  if (array.length <= 2) {
    return middleItems;
  } else {
    if (array.length % 2 !== 0) {
      middleItems.push(array[arrayMiddleIndex]);
      return middleItems;
    } else {
      middleItems.push(array[arrayMiddleIndex]);
      middleItems.push(array[arrayMiddleIndex + 1]);
      return middleItems;
    }
  }
};

//Testing
assertArraysEqual(middle([1,2,3,4,5,6]),[3,4]);
assertArraysEqual(middle([1,2,3,4,5]),[3]);
assertArraysEqual(middle([1,2,3,4]),[2,3]);
