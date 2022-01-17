//function implementation 
const middle = function(array) {
  let middleItems = [];
  const arrayMiddleIndex = Math.ceil(array.length / 2) - 1;
  if (array.length <= 2) {
    return middleItems;
  } else {
    if (array.length % 2 !== 0) {
      middleItems.push(array[arrayMiddleIndex]);
      return middleItems;
    } else {
      middleItems.push(array[arrayMiddleIndex]);
      middleItems.push(array[arrayMiddleIndex + 1]);
      return middleItems;
    }
  }
};

module.exports = middle;