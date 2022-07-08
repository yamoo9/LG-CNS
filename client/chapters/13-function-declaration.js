/* ---------------------------------------------------------------------- */
/* Functions → Declaration                                                */
/* ---------------------------------------------------------------------- */

// 함수 - JavaScript가 제공하는 재사용 할 수 있는 가장 기본적인 수단

console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);
console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);

// 변수 variables
// let price1, price2, price3, price4;


// 함수 선언
// 좋은 함수
// 로직이 하나 정도면 좋다.
// 함수가 내부에서 처리하는 일 외에 것들 (사이드 이펙트: 부수효과)
function calcTotalPrice(
  /* 매개변수: parameters */
  price1, price2, price3, price4
) {
  // 함수의 매개변수 → 함수 안에서만 접근 가능한 지역(local) 변수

  // 함수에서 처리된 결과 값을 반환(return)
  // 명시적으로 연산 처리 값을 반환
  // return price1 + price2 + price3 + price4;
  
  price1 + price2 + price3 + price4;
  
  // 암시적으로 행동
  // return undefined;
}

// 함수 호출
// calcTotalPrice(10000, 8900, 1360, 2100);

// 함수 값 반환
// 어떤 값들을 전달할 수 있다.
// 전달 인자(arguments)
let total = calcTotalPrice(10000, 8900, 1360, 2100); // 문(값을 반환하지 않음)과 식, 연산자, 함수(값을 반환함)

// 외부(전역 포함), 지역 변수
// 함수 외부에서 함수 내부의 지역 변수에 접근할 수 없음
// console.log(price1);


// 매개 변수 (parameters, params)

// 매개 변수(parameters) vs. 전달 인자(arguments)


// ES6 (2015)
// 매개 변수 기본 값(default parameter)
function searchElement(query, context = document) {
  // Web API - DOM API - (elementNode || document).querySelector
  return context.querySelector(query); 
}

// JavaScript 디자인 패턴
// 즉시 실행 함수 식 (함수 이름 호출 그 과정 없이 실행)
// 모듈 패턴
// IIFE

// 익명 함수
// 함수 === 값
(function() {
  // console.log('함수 이름을 부르지 않아도 로직은 실행된다.');

  // 외부와 분리
  // 지역 형성
  // 코드 보호
  
  // 재귀 호출
  // console.log(moduleIIFE);

})()



// 좋은 함수 작성 여건
// - 함수 이름은 읽기 쉽고 이해하기 용이해야 한다.
// - 함수 이름으로 유추가능한 기능을 포함해야 하며, 그 외의 기능은 포함하지 않도록 구성한다.
// - 함수가 연산 처리한 결과 값은 명시적으로 반환한다.