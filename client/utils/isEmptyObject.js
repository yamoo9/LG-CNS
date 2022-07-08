// ES Modules 내보내기(export)

export const isEmptyObject = (object) =>
  Object.keys(object).length > 0 ? false : true;

// { isEmptyObject }

// Node.js (CommonJS 진영의 모듈 내보내기)
// exports.isEmptyObject = isEmptyObject