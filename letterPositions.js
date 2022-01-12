//eqArrays function definition
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

//assertArrayEqual function definition
const assertArraysEqual = function(array1,array2) {
  if (eqArrays(array1,array2)) {
    console.log(`💚 Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`💔 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  for (let letter of sentence) {
    results[letter] = [];
  }
  for (let index in sentence) {
    for (let key in results) {
      if (sentence[index] === key) {
        results[key].push(index);
      }
    }
  }
  return results;
};

let harray = letterPositions("hello")["l"];
assertArraysEqual(harray,['2','3']);
console.log(harray);