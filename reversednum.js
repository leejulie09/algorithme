const sameReverse = (num) => {
  let reversedNum = num.reverse;
  for (i = 0; num.length < i; i++) {
    if (num === reversedNum) {
      console.log(num === reversedNum);
      return true;
    } else {
      return false;
    }
  }
};

console.log(sameReverse(1234));
