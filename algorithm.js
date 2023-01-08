function topK(nums, k) {
  let obj = {};

  for (i = 0; i < nums.length; i++) {
    nums[i] in obj ? (obj[nums[i]] += 1) : (obj[nums[i]] = 1);
  }

  let test = Object.keys(obj).sort(function (a, b) {
    return obj[b] - obj[a];
  });
  return test.slice(0, k).map((x) => parseInt(x));
}

console.log(topK([1, 1, 1, 2, 2, 3],2));
