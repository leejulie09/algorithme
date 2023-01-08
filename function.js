//함수 선언문.  
//이름은 생략할 수 없음.변쉐 할당 불가능
function add(x,y){
    return x+y;
}

console.dir(add);
console.log(add(2,5));

//함수 표현식. 함수 객체를 변수에 할당 가능하면 표현식
//함수 호출시 함수 이름이 아닌 함수 객체를 가르키는 식별자 사용
var add = function (x,y){
    return x+y;
};

console.log(add(2,5))

//화살표 함수. 콜백 함수 내부에서 유용 (표현식o, 선언문x)
//표현식 -> 함수 객체 식별자로

const multify = (x,y) => x*y;
multiply(2,3);

