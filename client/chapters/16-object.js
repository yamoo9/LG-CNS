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

console.log(authUser.email);

// 대괄호([]) 표기법

console.log(authUser['isSigned']);

// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

// 계산된 프로퍼티 (calcurate property)
let calculateProperty = 'permission'; // phone | tel

console.log(authUser[calculateProperty]);

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
console.log(authUser);

// 단축 프로퍼티
let name = '지훈';
let email = 'yamoo9@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;
const getName = () => this.name;

const me = { name, email, authorization, isLogin, getName };

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, let, const, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject() {
  return null;
}
