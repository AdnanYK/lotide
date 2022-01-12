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

// assertArraysEqual function definition
const assertArraysEqual = function(array1,array2) {
  if (eqArrays(array1,array2)) {
    console.log(`💚 Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`💔 Assertion Failed: ${array1} !== ${array2}`);
  }
};

// without function definition
const without = function(source,itemsToRemove) {
  let outputArray = source.slice();
  for (let j in itemsToRemove) {
    for (let k in outputArray) {
      if (itemsToRemove[j] === outputArray[k]) {
        outputArray.splice(k, 1);
      }
    }
  }
  return outputArray;
};

//testing
const words = ["hello", "world", "lighthouse","cars"];
without(words, ["lighthouse","cars"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse","cars"]); //should be a pass
assertArraysEqual(without(words, ["lighthouse","cars"]), ["hello", "world"]); //should be a pass