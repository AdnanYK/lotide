// Assert Equal function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💔 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//declaring the function
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems,itemsToCount) {
  let countedItems = {};
  for (let name in itemsToCount) {
    if (itemsToCount[name]) {
      let count = 0;
      for (let i in allItems) {
        if (allItems[i] === name) {
          count += 1;
          countedItems[name] = count;
        }
      }
      console.log(`count of ${name} is ${count}`);
    }
  }
  return countedItems;
};


//Testing
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);