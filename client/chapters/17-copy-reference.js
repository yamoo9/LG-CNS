import { cloneDeep, isEmptyObject } from '../utils/index.js';

/* ---------------------------------------------------------------------- */
/* Copy object by reference                                               */
/* ---------------------------------------------------------------------- */


// 복사(copy) vs. 참조(reference)

let message = '문자 값은 프리미티브 데이터 타입으로 값이 복사됩니다.';
let messanger = {
  name: 'kakao talk',
  manufacture: 'kakao'
};

let text = message; // 값 복사
let conversationTool = messanger; // 참조


// 비교 (복사 vs. 참조)
// console.log(message == text); // 동등 (==), 자동 데이터 타입 변환
// console.log(message === text); // 일치 (===), 데이터 타입 유지
// console.log(messanger == conversationTool);
// console.log(messanger === conversationTool);


// 객체 복사
// 1. for ~ in 문을 사용한 복사

// const copyedObject = {}

// for(const key in messanger) {
//   const value = messanger[key];
//   copyedObject[key] = value;
// }



// 2. Object.assign()을 사용한 복사 (O)

// const copyedObject = Object.assign({}, messanger);

// 3. 전개 연산자(...)를 사용한 복사

const copyedObject = { ...messanger };
// console.log(copyedObject);

// 3-2. 배열 복사
const members = '기완 한나 지용 배수'.split(' ');

// const teamMember = [...members]; // 참조된 배열을 복사
const teamMember = members.slice();

// console.log(teamMember);


// 4. 함수 객체 복사
// CDD = Component Driven Development
// Storybook

function originalFunction() {
  console.log('origin');
}

// Function.prototype.(call|apply|bind)


// 함수 복사
const copiedFunction = originalFunction.bind({});

// console.log(Object.is(originalFunction, copiedFunction));


// 객체 병합(합성)
const cssMapA = {
  color: '#4b004b',
  margin: '0 auto',
};

const cssMapB = {
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  padding: '0.4em 0.62em',
  color: '#3f9e97',
};

// 얕은 복사
let combinedCssMap = Object.assign({}, cssMapA, cssMapB);

// console.log(combinedCssMap);


// 중첩된 프로퍼티에 객체를 포함하는 객체 복사
// 얕은 복사 vs. 깊은 복사
const containerStyles = {
  'min-height': '100vh',
  'max-width': {
    sm: '90%',
    md: 640,
    lg: 960,
    xl: 1120,
    xxl: 1140
  },
};

let shallowCopyStyles = Object.assign({}, containerStyles);
let deepCopyStyles = cloneDeep(containerStyles);

console.log('shallowCopyStyles', shallowCopyStyles);
console.log('deepCopyStyles', deepCopyStyles);


// 1. 깊은 복사 유틸리티 함수
// function cloneDeep(object) {
//   return Object.fromEntries(
//     Object.entries(object).map(([key, value]) => {
//       let type = typeof value;
//       if (value && type === 'object') {
//         value = cloneDeep(value);
//       }
//       return [key, value];
//     })
//   );
// }


// 2. Lodash 라이브러리 활용
// _.cloneDeep(value)
// 참고: https://lodash.com/docs/4.17.15#cloneDeep
// CDN : https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
