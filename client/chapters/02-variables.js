/* eslint-disable no-unused-vars */

/* --------------------------------------------------------------------- */
/* Variables                                                             */
/* --------------------------------------------------------------------- */

// 다음 내용을 분석한 후, 프로그래밍 할 수 있도록 변수(variable)와 상수(constant variable)를 작성해봅니다.

// 프로그램 실행(runtime) 중에 값이 변할 수 있다면 `변수`, 값이 변할 수 없다면 `상수`

// JavaScript 변수
// var(X), let(O) / const

// - [상수, const]
// - 1년 기준 일자 수 (365)
// - 브랜드 접두사

// - [변수, let(var)]
// - 구매 결제 여부
// - 갯수 별 상품 가격 계산하기
// - 구매 제품 가격의 총 합
// - 구매 결제 내역
// - 오늘의 운세
// - 상품 정보

/* variables ----------------------------------------------------------- */

// [변수, let(var)] 구매 결제 여부 (is*, has*)
// 첫문자로 숫자가 올 수 없다.
// 단어 사이에 공백이 위치할 수 없다.
// 특수 문자는 $, _만 허용한다.
// camelCase
// snake_case

let isPurchase;
let calcProductPriceByQuantity;
let totalPriceOfProducts;
let purchasePaymentList;
let todayFortune;
let productInformation;

/* constant variables -------------------------------------------------- */

// [상수, const] 1년 기준 일자 수 (365)
// 대문자(ALL_CAPS)로 이름 작성 : 하드 코딩 값을 입력할 때
// 카멜케이스(camelCase) 방식으로 이름 작성 : 동적으로 상황에 따라 값이 바뀔 수 있는 경우

const NUMBER_DAYS_PER_YEAR = 365;
const BRAND_PREFIX = 'LG_CNS';
