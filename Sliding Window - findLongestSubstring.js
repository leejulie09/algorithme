/*
Write a function called findLongestSubstring, 
which accepts a string and 
returns the length of the longest substring 
with all distinct characters.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6 , awesom
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
Time Complexity - O(n)

*/

//시도

function findLongestSubstring(str){
/*
str 배열안에 각각으로 넣어주기
비교1 temp:0부터 for문을 돌다가 겹치는 문자열이 있으면 멈추고, 
그거를 temp로 잡기
비교2:한번 더 똑같이
비교1, 비교2 해서 더 긴거 반환
*/

let maxLen = 0;
let tempLen = 0;
const arr = [...str]

const lookup={};
for(let i =0; i<str.length; i++){
  let letter = str[i];
  lookup[letter]? (lookup[letter] += 1) : (lookup[letter] = 1);
 if(lookup[letter] === 2){
 }
}
 for (let i = 0; i< ; i++){
//겹치는 문자열이 있기 전까지 돌려야하는데, 겹치기는거 생기는 전까지. 객체에 하나씩 넣어서 비교?

 }
}

findLongestSubstring('thisishowwedoit')

//해결
function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

findLongestSubstring('thisishowwedoit')