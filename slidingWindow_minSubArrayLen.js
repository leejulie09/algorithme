/*
Sliding Window - minSubArrayLen
Write a function called minSubArrayLen which accepts 
two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of 
which the sum is greater than or equal to the integer passed to the function. 
If there isn't one, return 0 instead.

이 함수는 연속된 하위 배열의 최소 길이를 반환해야 합니다.
합계는 함수에 전달된 정수보다 크거나 같습니다.
없는 경우 대신 0을 반환합니다.

Examples:

minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0

Time Complexity - O(n)
Space Complexity - O(1)
*/

//시도
function minSubArrayLen(arr, sum) {
  let minSum = 0;
  let tempSum = 0;
  let compareLen = arr.length;
  let minLen = 0;

  for (let i = 0; i < compareLen; i++) {
    minSum += arr[i];
  }
  tempSum = minSum;

  if (minSum < sum) {
    return null;
  } else {
    for (let i = minSum; i < arr.length; i++) {
      tempSum = tempSum - arr[i - minSum] + arr[i];
      minSum = Math.min(minLen, tempSum);
    }
    return minSum;
  }
}

minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11);

//minSubArrayLen이거를 arr.length로 둬야함

//solution
function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // 현재 창이 주어진 합계에 추가되지 않으면
    // 창을 오른쪽으로 이동
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }

    // 현재 창의 합이 최소한 주어진 합계에 도달하면
    // 창을 축소할 수 있습니다.
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // 현재 총계는 필요한 총계보다 작지만 끝에 도달했습니다.
    //이것이 필요하지 않으면 무한 루프에 빠지게 됩니다.
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

//제일 작은수를 구해야할때는 infinity, 제일 큰수를 구할때는 0으로 정하기
//무조건 끝까지 돌아야할때는 while문을 쓰기, 그렇지 않을때는 for문
