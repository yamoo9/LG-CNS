/* ---------------------------------------------------------------------- */
/* Data Types                                                             */
/* ---------------------------------------------------------------------- */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 원시(primitives) 데이터 타입
// null, undefined
// number, bigint, string, boolean, symbol

// 객체(object) 데이터 타입
// object (object / array / function)

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
let nothing = null;

// 2. 값이 할당되지 않은 상태 (변수 선언되었지만 초기화 과정에서 값이 할당되지 않은 경우)
let isNotDefined; // undefined

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
let string = "this is string \"data\" type";
let message = 'this is message \'data\' type';
let comment = `this is comment \`data\` type`;

// console.log(string, message, comment);

// 4. 정수, 부동 소수점 숫자(길이 제약)
let number = 10 + 0.98;

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
let bigint = 10000000n;

// 6. 참(true, yes) 또는 거짓(false, no)
let yes = true;
let no = false;

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
// 객체 타입 (Object, Array, Function)
const object = {}; // literal syntax
const list = [];
const func = function() {};

// 8. 고유한 식별자(unique identifier)
let id = Symbol('unique identifier');


/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 연산자 typeof
// console.log(typeof func); // 'function'

// 함수 typeof()
// console.log(typeof(number)); // 'number'

// 언어 상, 오류
// null, array, object 이런 데이터 타입을 정확하게 구분하지 못함

// console.log('{}', typeof {}); // 'object'
// console.log('[]', typeof []); // 'array' ?
// console.log('undefined', typeof undefined); // 'undefined'
// console.log('null', typeof null); // 'null' ?

// 재사용 가능한 유틸리티 함수(모듈) 활용
// typeIs(dataType) => 'type'
// typeIs(null) => 'null'
// {}, [], null

function typeIs(data) {
  return Object.prototype.toString.call(data).toLowerCase().slice(8,-1);
}