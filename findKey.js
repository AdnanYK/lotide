// FUNCTION IMPLEMENTATION
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1,object2) {
  let equalObjects = true;
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key in object1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        console.log(object1[key],object2[key]);
        if (eqArrays(object1[key],object2[key]) === false) {
          equalObjects = false;
        }
      } else {
        if (object1[key] !== object2[key]) {
          equalObjects = false;
        }
      }
    }
  } else {
    equalObjects = false;
  }
  return equalObjects;
};





const findKey = function (object,callback) {
  let foundKey;
  for (key in object) {
    // console.log(callback(object[key]));
    if (callback(object[key])) {
      foundKey = key;
      return foundKey;
    } 
  }
  return foundKey;
}


const resultss = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

console.log(resultss);

assertEqual(resultss,"noma");