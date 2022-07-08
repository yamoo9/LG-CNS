/* ---------------------------------------------------------------------- */
/* DOM traversal                                                          */
/* ---------------------------------------------------------------------- */

// root element node
// <html>

const root = document.documentElement;
const headInRoot = root.firstChild;
const bodyInRoot = root.lastChild;

// console.log(root);
// console.log(headInRoot);
// console.log(bodyInRoot);

// childNodes, chlidren
// console.log(root.childNodes); // element, comment, text, ....
// console.log(root.children); // element

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// 런타임 중에 노드 리스트가 업데이트 될 경우, 반영
// - getElementById
// - getElementsByTagName
// - getElementsByClassName

const unorderedList = document.getElementsByTagName("ul")[0];

// console.log(unorderedList.firstChild);
// console.log(unorderedList.lastChild);

// DOM 탐색 (다음 형제 엘리먼트 노드) 유틸리티 함수
function next(node) {
  do {
    node = node.nextSibling;
  } while (node.nodeType !== document.ELEMENT_NODE);
  return node;
}

function prev(node) {
  do {
    node = node.previousSibling;
  } while (node.nodeType !== document.ELEMENT_NODE);
  return node;
}

const firstLi = unorderedList.querySelector("li");
const lastLi = unorderedList.querySelector("li:last-child");

// console.log(firstLi);

const secondLi = firstLi?.nextElementSibling; //next(firstLi);

console.log("secondLi", secondLi);

const previousItemFromLast = lastLi?.previousElementSibling; // prev(lastLi);

console.log("previousItemFromLast", previousItemFromLast);

// 런타임 중에 노드 리스트가 업데이트 될 경우, 미반영
// - querySelector('CSS Selector') // ElementNode
// - querySelectorAll              // NodeList = ElementNode[]

// - closest

/* 문서 대상 확인 */
// - matches(selector)
// - contains(node)
