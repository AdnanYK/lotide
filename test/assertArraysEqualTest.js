// import assertArraysEqual function
const assertArraysEqual = require("../assertArraysEqual");

//Test code
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 1, 3]);
assertArraysEqual([1, 2, 3], [1, 2, '3']);
assertArraysEqual([1, 2, 3], [2, 3, 1]);