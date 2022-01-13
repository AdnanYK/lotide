const map = function(array,callback) {

  // console.log('array: ', array);
  // console.log('callback: ', callback);

  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;

};

const words = ["ground", "control", "to", "major", "tom"];

const result = map(words, word => word[0]);

console.log(result);

//eqArrays function
const eqArrays = function(array1,array2) {
  let outcome;
  for (let i in array1) {
    if (array1.length !== array2.length) {
      outcome = false;
    } else {
      if (array1[i] !== array2[i]) {
        return false;
      } else {
        outcome = true;
      }
    }
  }
  return outcome;
};

//assertArraysEqual function 
const assertArraysEqual = function(array1,array2) {
  if (eqArrays(array1,array2)) {
    console.log(`💚 Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`💔 Assertion Failed: ${array1} !== ${array2}`);
  }
};

//Testing
assertArraysEqual(result,['g','c','t','m','t']);
assertArraysEqual(result,['g','c','t','m','t','k']);