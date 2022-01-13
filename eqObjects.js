// assertEqual FUNCTION IMPLEMENTATION
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba),true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc),false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false); // => false



