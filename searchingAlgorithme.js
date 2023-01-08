//Linear search

//try
function linearSearch(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (i === value) {
      return true;
    } else return -1;
  }
}

linearSearch([1, 2, 3, 4], 4);
linearSearch([1, 2, 3, 4], 5);

//solution
function linearSearch() {
  for (let i = 0; i < array.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

//Binary search

//try
function binarySearch(array, value) {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let middle = Math.round((array.length - 1) / 2);
    if (array[middle] === value) return middle;
    else if (array[middle] > value) left++;
    else if (array[middle] < value) right--;
  }
  return -1;
}

binarySearch([1, 2, 3, 4], 4);
binarySearch([1, 2, 3, 4], 5);

//solution
function binarySearch(array, value) {
  let start = 0;
  let end = array.length - 1;
  let middle = Math.floor((start + end) / 2);
  console.log(start, middle, end);

  while (array[middle] !== value && start <= end) {
    if (value < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (array[middle] === value) {
    return middle;
  }
  return -1;
}

//shortened
function binarySearch(array, value) {
  let start = 0;
  let end = array.length - 1;
  let middle = Math.floor((start + end) / 2);
  console.log(start, middle, end);

  while (array[middle] !== value && start <= end) {
    if (value < array[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return array[middle] === value ? middle : -1;
}

//Naive String search

//try
function navieSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (i !== j) {
        return;
        //break out of the inner loop
      } else {
        return;
        //keep going
      }
    }
  }
  count++;
  return count;
  //increment the count of matches
}

navieSearch("wowomgzomg", "omg");

//solution
function navieSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      //console.log(long[i],short[j],long[i+j])
      if (short[j] !== long[i + j]) {
        //console.log("BREAK!")
        break;
      }
      if (j === short.length - 1) {
        //마지막까지 갔을 때
        //console.log("FOUND ONE")
        count++;
      }
    }
  }
  return count;
}
