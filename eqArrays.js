// Assert equal function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💔 Assertion Failed: ${actual} !== ${expected}`);
  }
};


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




console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3,4]), true); // => should PASS