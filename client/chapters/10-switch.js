/* ---------------------------------------------------------------------- */
/* Switch                                                                 */
/* ---------------------------------------------------------------------- */

// if 대용 조건 문 (조건 갯수가 많을 때 유용)

// single constant variable pattern
const MORNING = '아침',
  LUNCH = '점심',
  DINNER = '저녁',
  NIGHT = '밤',
  LATE_NIGHT = '심야',
  DAWN = '새벽';

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 이른 아침이니 꿈나라에 있다.'

console.log('%c----------------------------------------', 'color: #4415e0');

/* switch문 → if문 변환 --------------------------------------------------- */

let thatTime = DAWN;

console.time('if문');
if (thatTime === MORNING) {
  console.log('thatTime', '뉴스 기사 글을 읽는다.');
} else if (thatTime === LUNCH) {
  console.log('thatTime', '자주 가는 식당에 가서 식사를 한다.');
} else if (thatTime === DINNER) {
  console.log('thatTime', '동네 한바퀴를 조깅한다.');
} else if (thatTime === NIGHT) {
  console.log('thatTime', '친구에게 전화를 걸어 수다를 떤다.');
} else if (thatTime === LATE_NIGHT || thatTime === DAWN) {
  console.log('thatTime', '한밤 중이거나, 이른 아침이니 꿈나라에 있다.');
} else {
  throw new TypeError('그 어떤 조건도 참이 아님...');
}
console.timeEnd('if문');

console.log('%c----------------------------------------', 'color: #4415e0');

let thisTime = DAWN;

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */
console.time('switch문');
switch (thisTime) {
  case MORNING:
    console.log('thisTime', '뉴스 기사 글을 읽는다.');
    break;
  case LUNCH:
    console.log('thisTime', '자주 가는 식당에 가서 식사를 한다.');
    break;
  case DINNER:
    console.log('thisTime', '동네 한바퀴를 조깅한다.');
    break;
  case NIGHT:
    console.log('thisTime', '친구에게 전화를 걸어 수다를 떤다.');
    break;
  case LATE_NIGHT:
  case DAWN:
    console.log('thisTime', '한밤 중이거나, 이른 아침이니 꿈나라에 있다.');
    break;
  default:
    throw new TypeError('그 어떤 조건도 참이 아님...');
}
console.timeEnd('switch문');

console.log('%c----------------------------------------', 'color: #4415e0');
