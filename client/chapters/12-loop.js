/* ---------------------------------------------------------------------- */
/* Loop                                                                   */
/* ---------------------------------------------------------------------- */

// JavaScript : 배열(Array) 값의 집합(collection)
const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Next.js',
  'Redux',
  'SWR',
];

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

// console.log(frontEndDev[0]);
// console.log(frontEndDev[1]);
// console.log(frontEndDev[2]);
// console.log(frontEndDev[3]);
// console.log(frontEndDev[4]);
// console.log(frontEndDev[5]);
// console.log(frontEndDev[6]); // ??

/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문
// let length = frontEndDev.length; // 6, 5, 4, 3, 2, 1, 0

// while (length > 0) {
//   // length = length - 1;
//   // length -= 1;
//   length--;
//   console.log(frontEndDev[length]);
// }

// do ~ while 문
// do {
//   수행할 일
// } while(조건);

// for 문
// for (let index = 0, length = frontEndDev.length; index < length; ++index) {
//   let frontEndDevItem = frontEndDev[index];
//   console.log(frontEndDevItem);
// }

// 화살표 함수 식
// frontEndDev.forEach((item, index) => console.log(item));

for (const item of frontEndDev /* 열거 가능한(iterable) 순환 */) {
  console.log(item);
}

/* 객체 순환 -------------------------------------------------------------- */

// key:value로 구성된 집합 (entity)

const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2022,
};

// console.table(javaScript);

// for ~ in 문
for (const key in javaScript) {
  // JavaScript 객체 지향 프로그래밍 지원
  if (Object.hasOwnProperty.call(javaScript, key)) {
    const value = javaScript[key];
    // console.log(key, value);
  }
}

// for ~ of 문
// array → object 변환
