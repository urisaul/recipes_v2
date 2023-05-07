export const mergeArrs = (arr1, arr2) => {
  return arr2.reduce((acc, obj) => {
    const existingObj = acc.find((item) => item.id === obj.id);

    if (existingObj) {
      Object.assign(existingObj, obj);
    } else {
      acc.push(obj);
    }

    return acc;
  }, arr1);
};
