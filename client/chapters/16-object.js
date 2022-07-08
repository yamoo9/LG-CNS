import { isEmptyObject } from '../utils/isEmptyObject.js';

// console.log(myModule: { isEmptyObject });

/* ---------------------------------------------------------------------- */
/* Object                                                                 */
/* ---------------------------------------------------------------------- */

/* Primitives vs. Object ------------------------------------------------ */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조

// ES6 (2015)
// Template Literal

let cssCode = `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// console.log(typeof cssCode);

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
const cssMap = {
  position: 'fixed',
  zIndex: 1e4,
  top: '50%',
  left: '50%',
  width: '60vw',
  maxwidth: 800,
  height: '40vh',
  minHeight: 280,
  transform: 'translate(-50%, -50%)',
};

// console.log(cssMap, typeof cssMap);

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

// JavaScript 객체 (수정 가능: mutation)
const authUser = {
  name: 'yamoo9',
  email: 'yamoo9@euid.dev',
  isSigned: true,
  permission: 'admin',
};

// 불변성 설정
// 참조를 끊고, 새로운 객체를 복사해서 동결(freezing)
// const immutableAuthUser = Object.freeze(authUser);

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// console.log(authUser.email);

// 대괄호([]) 표기법

// console.log(authUser['isSigned']);

// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

// 계산된 프로퍼티 (calcurate property)
let calculateProperty = 'permission'; // phone | tel

// console.log(authUser[calculateProperty]);

let themeName = 'bright'; // 'bright', 'vivid'

const theme = {
  [themeName]: {
    background: '#fff',
    color: '#111',
  },
};

// 프로퍼티 포함 여부 확인
// 'propertyName' in object

// 프로퍼티 나열

// iterable 객체가 아닌, 일반 객체를 배열로 변환
// Object.keys → [key1, key2, ..., keyN]
// Object.values → [value1, value2, ..., valueN]
// Object.entries → [[key, value], [key, value], ..., [key, value]]

// for - of문을 활용
// 배열의 모든 메서드 활용

// 프로퍼티 제거

delete authUser.email;
// console.log(authUser);

// 단축 프로퍼티
let name = '지훈';
let email = 'yamoo9@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

// 함수 선언
function setEmail(newEmail) {
  console.log('함수 선언의 this ', this);
  this.email = newEmail;

  // 메서드 체이닝
  // $('.target').attr().css().on()
  return this;
}

// 함수 식
const printName = function () {
  console.log('일반 함수 식의 this ', this);
  return this.name;
};

// 화살표 함수 식
const getName = () => {
  console.log('화살표 함수 식의 this ', this);
  // this === undefined 가 되면 오류
  // 옵셔널 체이닝 (?.)
  return this?.name;
};

const me = {
  name,
  email,
  authorization,
  isLogin,
  printName,
  getName,
  setEmail,
};

// me.getName(); // ERROR

// 메서드 빌려쓰기
// 메서드를 사용하는 주체를 변경
const getNameByMe = me.getName.bind(me);

getNameByMe();

// 함수 선언(식 포함)의 this vs. 화살표 함수 식의 this

// 이전 시대의 JavaScript에서 사용되었던(물론 지금도 자주 사용되죠)
// 함수 선언, 식에서의 this는 함수가 연결된 대상을 지칭합니다.

// 반면에 화살표 함수 식의 this는 함수에 연결된 대상이 아닌,
// 상위 영역을 this로 참조합니다. 모듈 파일 내부에서는 this === undefined
// 글로벌 웹에서의 스크립트 파일에서는 this === window

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, let, const, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
// function isEmptyObject(object) {
//   // 객체가 특정 프로퍼티를 포함했는지? 안했는지? 확인

//   // 객체의 프로퍼티 순환해서 존재여부 확인
//   // for - in 문
//   // for - of 문 (객체 → 이터러블 객체 변환(예: 배열))
//   // 객체의 프로퍼티 리스트를 뽑아내서 갯수를 확인

//   // 결과 내보내기
//   return Object.keys(object).length > 0 ? false : true;
// }

/* global isEmptyObject */

let check1 = isEmptyObject({});
let check2 = isEmptyObject({ a: 1 });

console.log('check1', check1);
console.log('check2', check2);
