function sort(arr) {
  return arr;
}

sort([23, 34, 6, 12, 13]);

//swap
//ES5
function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

//ES2015
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

//bubble sort
//try

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        arr[j] = arr[j + 1];
      }
    }
  }
  return arr;
}

bubbleSort([3, 76, 5, 7, 45]);

//less optimized
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        //SWAP!
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

//optimized
function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    //use i in the definition of j
    for (let j = 0; j < i - 1; j++) {
      //console.log(arr,arr[j],arr[j+1])
      if (arr[j] > arr[j + 1]) {
        //SWAP!
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    //console.log("ONE PASS COMPLETE!")
  }
  return arr;
}

//updated

function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx2]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

//more optimized

function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    //use i in the definition of j
    noSwaps=true;
    for (let j = 0; j < i - 1; j++) {
      //console.log(arr,arr[j],arr[j+1])
      if (arr[j] > arr[j + 1]) {
        //SWAP!
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps=false;
      }
    }
    //console.log("ONE PASS COMPLETE!")
    if(noSwaps) break;
  }
  return arr;
}