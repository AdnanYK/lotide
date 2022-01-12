//assertEqual function definition
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💔 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// the function should take an object and a value, it should scan the object and return the first key which contains the given value.
//if no key with that given value is found, then it should return undefined.
const findKeyByValue = function(table,value) {
  let foundKey;

  for (let key in table) {
    if (table[key] === value) {
      foundKey = key;
    }
  }

  return foundKey;
};



//test
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);