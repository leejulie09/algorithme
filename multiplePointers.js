sumZero([-3,-2,-1,0,1,2,3])//[-3,3]
sumZero([-2,0,1,3])//undefined
sumZero([1,2,3])//undefined

//naive solution
function sumZero(arr){
  for(let i=0; i<arr.length;i++){
    for(let j=i+1; j<arr.length;j++){
      if(arr[i]+arr[j]===0){
        return [arr[i],arr[j]]
      }
    }
  }
}

//multiple pointer
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}




function areThereDuplicates() {}

/*given a sorted array of integers and a target average, 
determine if there's a pair of values in the array 
where the average of the pair equals the target average.
There may be more than one pair that matches the average target.
*/

//1차 시도 실패
function averagePair(array) {
  let arr = array[0];
  let left = 0;
  let right = arr.length - 1;
  let ave = array[1];
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === ave * 2) {
      return true;
    } else if (sum !== ave * 2) {
      right--;
    } else {
      left++;
    }
  }
}

//해결
function averagePair(arr, tar) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let ave = arr[left] + arr[right] / 2;
    if (ave === tar) {
      return true;
    } else if (ave > tar) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}

averagePair([1, 2, 3], 2.5); //true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); //true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); //false
averagePair([], 4); //false


//시도
function isSubsequence(first, second) {
  let left = 0;
  let right = first.length - 1;

  while (left < right) {
    let check = first[left] + first[right];
  }
}

function isSubsequence(first, second) {
  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < second.length; j++) {
      if ((first[i] = second[j])) {
        return true;
      } else {
        return false;
      }
    }
  }
}

,가 아닌 ;임
=가 아닌 ---

isSubsequence("hello", "hello world"); // true
isSubsequence("sing", "sting"); // true
isSubsequence("abc", "abracadabra"); // true
isSubsequence("abc", "acb"); // false (order matters)


//희주

function isSubsequence(str1, str2) {
  const arr = [...str1, ...str2.split("").reverse()]

  let left = 0;
  let right = arr.length - 1;

  while(left < right) {
    if (arr[left] === arr[right]) {
        if (left === str1.length -1) {
            return true
        } else {
          left ++;
          right --;
        }
    } else {
        right --;
    }
  }
  return false
}

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
isSubsequence('abc', 'abracadabra');
// sing sting
// [s, i, n, g, g, n, i, t, s]

//해결
function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

//해결2
function isSubsequence(str1, str2) {
  if(str1.length === 0) return true
  if(str2.length === 0) return false
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
  return isSubsequence(str1, str2.slice(1))
}