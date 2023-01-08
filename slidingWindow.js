//not really good way

function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }

  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity

//sliding window. O(N)
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)//19

function maxSubarraySum(arr, num){
  let maxSum=0,
  //뭘 구하고 싶은지?
  let tempSum=0,
  //비교할 대상?
  if(arr.length<num) return null;
  //edge case
  for(let i = 0; i<num;i++){
    maxSum = maxSum + arr[i];
    //누적으로 합계가 쌓임, 여기에다가 저장해놓기
  }
  tempSum=maxSum
  //2+6+9=17
  for(let i=num; i< arr.length; i++){
    tempSum=tempSum- arr[i-num]+arr[i];
  
  //17=17-2+2 // tempSum=tempSum-arr[0]+arr[3] (i=3)
  //12=17-6+1 //tempSum=tempSum-arr[1]+arr[4](i=4)
  //11=12-9+8 //tempSum=tempSum-arr[2]+arr[5](i=5)
  //14=11-2+5 //tempSum=tempSum-arr[3]+arr[6](i=6)
  //19=14-1+6 //tempSum=tempSum-arr[4]+arr[7](i=7)
  //14=19-8+3 //tempSum=tempSum-arr[5]+arr[8](i=8)
  maxSum=Math.max(maxSum, tempSum)
  //지금까지 나왔던것 중에서 가장 큰것만 쌓임
}return maxSum
}