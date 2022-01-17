const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");


//Test code
console.log(eqArrays([1, 2, 3], [1, 2, 3]),"should show true"); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1]),"should show false"); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]),"should show true"); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]),"should show false"); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3,4]), false); // => should Fail