// 언제? 시점 조작(변경)
// HTML 파서가 문서를 모두 해석해 DOM 구조가 완성된 이후

// 웹 브라우저 글로벌 객체(global object)
// window
// window.addEventListener('이벤트 타입', 이벤트 처리기(이벤트가 발생하면 실행, 콜백함수))

// HTML, video, image, ...
// window.addEventListener('DOMContentLoaded', handleDOMContentLoaded);

// function handleDOMContentLoaded() {
//   console.log('DOM Content Loaded');
// }

// add `defer` attribute
let h1Element = document.querySelector('h1');
console.log('요소노드', h1Element.textContent);
