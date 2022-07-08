export function cloneDeep(object) {
  // 구조 분해 할당
  // destructuring assignemnt

  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => {
      let type = typeof value;
      if (value && type === 'object') { // array, object
        value = cloneDeep(value);
      }
      return [key, value];
    })
  );
}