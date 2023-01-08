function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

validAnagram("rainbow", "bowrain");

//challenge
function sameFrequency(first, second) {
  if (first.length != second.length) {
    return false;
  }

  const lookup = {};
//H T
  for (let i = 0; i < first.length; i++) {
    let number = first[i];
    lookup[number] ? (lookup[number] += 1) : (lookup[number] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let number = second[i];
    if (!lookup[number]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

sameFrequency(182, 281);
sameFrequency(22, 222);
