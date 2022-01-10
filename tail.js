const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💔 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let x = array.length;
  return array[x - 1];
};

assertEqual(tail([5,6,7]), 7);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Labs");
assertEqual(tail([],undefined));