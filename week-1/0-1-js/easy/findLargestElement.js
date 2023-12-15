/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(arr) {
    let max=arr[0];
    for (let i = 1; i < arr.length; i++) {
        const element = arr[i];
        if (element>max) {
            max=element;
        }
    }
    return max;
}

module.exports = findLargestElement;