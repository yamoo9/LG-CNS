/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = false;
// 영화 볼거니?
let goingToWatchMovie = false;

// if 문(statement)
// false로 처리되는 데이터 값: undefined, null, NaN, 0, ''
if (didWatchMovie) {
  console.log('영화 나도 봤어!');
} else {
  // else 절(caluse)
  console.log('아니 아직 안 봤어...');
  if (goingToWatchMovie) {
    console.log('응 영화 볼 예정이야');
  } else {
    console.log('별로.. 그 영화 안 땡겨...');
  }
}

const PENDING = '팬딩';
const LOADING = '로딩';
const FULFILLED = '성공';
const REJECTED = '실패';

// else if 복수 조건 처리

let state = REJECTED;

if (state === FULFILLED) {
  console.log('데이터 로드 성공');
} else if (state === REJECTED) {
  console.log('데이터 로드 실패');
} else if (state === LOADING) {
  console.log('데이터 로딩 중...');
} else {
  console.log('아직 요청 전');
}

// 조건부 연산자 ? :
// 삼항 연산자 식(expression), 터너리(ternary)

let conversation = didWatchMovie ? '그 영화 재밌더라' : '아직 안 봤어';

// console.log(conversation);

// 멀티 조건문 → 멀티 조건부 연산자 식

// if (state === FULFILLED) {
//   console.log('데이터 로드 성공');
// } else if (state === REJECTED) {
//   console.log('데이터 로드 실패');
// } else if (state === LOADING) {
//   console.log('데이터 로딩 중...');
// } else {
//   console.log('아직 요청 전');
// }

// inline
// conversation = state === FULFILLED ? '데이터 로드 성공' : state === REJECTED ? '데이터 로드 실패' : state === LOADING ? '데이터 로딩 중...' : '아직 요청 전';

// block (readable)
conversation =
  state === FULFILLED
    ? '데이터 로드 성공'
    : state === REJECTED
    ? '데이터 로드 실패'
    : state === LOADING
    ? '데이터 로딩 중...'
    : '아직 요청 전';

console.log(conversation);
