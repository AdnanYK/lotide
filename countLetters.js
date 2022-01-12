// Assert Equal function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💔 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// main function implementation
const countLetters = function(inputString) {
  //initializing the countObject which will be returned at the end of the function
  let countObject = {};

  for (let letter of inputString) {
    countObject[letter] = 0;
  }
  for (let key in countObject) {
    for (let Letter of inputString) {
      if (Letter === key) {
        countObject[key] += 1;
      }
    }
  }
  return countObject;
};

console.log(countLetters("hello"));
console.log(countLetters("adnan"));