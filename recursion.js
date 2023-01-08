//Call stack
function takeShower() {
  return "Showering";
}

function eatBreakfast() {
  let meal = cookFood();
  return `Eating ${meal}`;
}

function cookFood() {
  let items = ["Oatmeal", "Eggs", "Protein Shake"];
  return items[Math.floor(Math.random() * items.length)];
}

function wakeUp() {
  takeShower();
  eatBreakfast();
  console.log("Ok ready to go to work!");
}

wakeUp();

//first recursive function
function countDown(num) {
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

countDown(5);

//iteration
function countDown(num) {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
  console.log("All done!");
}
countDown(5);

//second recursive function

function sumRage(num) {
  if (num === 1) return 1;
  return num + sumRage(num - 1);
}

//factorial: iterative solution

function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

factorial(3);

//factorial: recursive solution
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

factorial(3);

//helper method recursion

function outer(input) {
  let outerScopedVariable = [];
  function helper(helperInput) {
    helper(helperInput--);
  }
  helper(input);
  return outerScopedVariable;
}

function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      //odd
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1)); //subarray shrink it until when its empty
  }
  helper(arr);
  return result;
}

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//pure recursion

function collectOddValues(arr) {
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  }
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//power

function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

//재귀사용안하면
function power(base, exponent) {
  if (exponent === 0) return 1;
  return base ** exponent;
}

//factorial

//factorial(1) // 1
//factorial(2) // 2
//factorial(4) // 24
//factorial(7) // 5040

function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

//product of array 곱
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

//내가푼거 (재귀가 있으니까 반복문을 돌릴 필요가 없는 것임)
function productOfArray(arr) {
  if (arr.length === 0) return;
  for (let i = 0; i < arr.length; i++) {
    return arr[i] * productOfArray(arr.slice(1));
  }
}

//helper 방식
function productOfArray(arr) {
  let count = 1;

  function helper(helperInput) {
    if (!helperInput.length) return;

    count = count * helperInput[0];
    helper(helperInput.slice(1));
  }

  helper(arr);
  return count;
}

//pure recursion방식
function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}

//Recursive Range
// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55

//내가 푼 방법
function recursiveRange(num) {
  if (num === 0) {
    return 0;
  }
  return num + recursiveRange(num - 1);
}

//해답
function recursiveRange(x) {
  if (x === 0) return 0;
  return x + recursiveRange(x - 1);
}

//Fib

// fib(4) // 3
//1+1+2+3
// fib(10) // 55
//1+1+2+3+5+8+13+21+34+55
// fib(28) // 317811
// fib(35) // 9227465

//내가풀다만거
function fib(num) {
  if (num === 0) {
    return 1;
  }
  return fib(num) + fib(num - 1);
}

//해답
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

/*function collectOddValues(arr) {
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  }
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}*/
