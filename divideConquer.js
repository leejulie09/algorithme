search([1, 2, 3, 4, 5, 6], 4); //3
search([1, 2, 3, 4, 5, 6], 6); //5
search([1, 2, 3, 4, 5, 6], 11); //-1

//naive solution

function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

//binary search

function search(array, val) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    if (currentElement < val) {
      min = middle + 1;
    } else if (currentElement > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}
