
//reverse - Write a recursive function called reverse which accepts a string and returns a new string in reverse.

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

//first try
function reverse(str) {
  if()return;
  //1.다 잘라서 배열안에 넣기 [ 'a', 'w', 'e', 's', 'o', 'm', 'e' ]
  str.split("")
  //2.재 정렬하기: (전체 length-1)-내 index -> 새로 정렬될 index //splice 사용?
  str.splice((str.length-1) - str.indexOf(), str.indexOf(),  )
  //3.붙이기 .join
  return;
  }
  
  // 규림
  function reverse(str) {
    if (str.length === 0) {
        return "";
    }
  
    return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
  }
  
  // let str = "hello"
  // "o" + reverse("hell")
  // "o" + "l" + reverse("hel")
  // "o" + "l" + "l" + reverse("he")
  // "o" + "l" + "l" + "e" + reverse("h")
  
  //희주
  function reverse(str) {
  
    // base case
    if (str.length === 0) return ''
    if (str.length === 1) return str[0]
    
    // !point : return reverse
    return reverse(str.slice(1)) + str[0]
    
    // reverse(ello) + h
    // reverse(llo) + e + h
    // reverse(lo) +  l + e + h;
  }
  
  //solution
  function reverse(str){
    if(str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
  }
  
//isPalindrome
//Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
  
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

//first try

hello
"h" "e" "l" "l" "o"
function isPalindrome(str){
  //0.분해
str.split("")
//1.반 잘라
if(str.length % 2 === 0){
return str.length-1 / 2
}else{
return
}
//2.reverse
//3.원래거랑 비교 
}

//solution
function isPalindrome(str){
  if(str.length === 1) return true;
  if(str.length === 2) return str[0] === str[1];
  if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
  return false;
}
  

// someRecursive
// Write a recursive function called someRecursive 
// which accepts an array and a callback. 
// The function returns true if a single value in the array 
// returns true when passed to the callback. 
//Otherwise it returns false.

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false


//first try
const isOdd = val => val % 2 !== 0;

function someRecursive(array, callback){
  if(array.length === 0) return false;
  let arrElement = array.shift();
  if(callback(arrElement)) return true;
  return someRecursive(array, callback);
}

//답
function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1),callback);
}