/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */

let a = 10;
let b = '';
let value = Boolean(b); // '' => false

// 논리곱(그리고) 연산자
let AandB = a && b ? true : false;

console.log('AandB', AandB);

// 논리합(또는) 연산자
let AorB; // undefined
// let AorB = a || b ? true : false;

if (a || b) 
  AorB = true; 
else 
  AorB = false;

console.log('AorB', AorB);

// 부정 연산자 (반전: true → false, false → true)
let reverseValue = !value; // false → true

console.log('value', value);
console.log('reverseValue', reverseValue);


// 조건 처리 식
// single let(var) pattern
let i = 'identifier', o = 0, r = 'reload';
// undefined (false)

// 첫번째 Falsy를 찾는 연산 (&&)
let whichA = i && o && r && 'truthy';

console.log('whichA', whichA);

// 첫번째 Truthy를 찾는 연산 (||)
let whichB =  i || o || r || 'falsy';

console.log('whichB', whichB);


// 조건, 함수 정의
let isReady = false;
const displayInformation = () => console.log('정보 표시');
const displayLoading = () => console.log('로딩 중...');

// 조건 && 수행
// isReady && displayInformation();
if (isReady) displayInformation();

// 조건 || 수행
// isReady || displayLoading();
if (!isReady) displayLoading();



function assignDesignAndCallback(callback) {
  console.log('assign design work');

  // 만약 callback이 전달되었고, callback이 함수라면? callback 실행
  callback && typeof callback === 'function' && callback();

  // if (callback) {
  //   if (typeof callback === 'function') {
  //     callback();    
  //   }
  // }

  // if (callback && typeof(callback) === 'function') callback();
}