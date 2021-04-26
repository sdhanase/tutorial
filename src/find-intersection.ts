export const findIntersection = (arrset: Array<string>): Array<number> => {
  const numArr = arrset.map(i => i.split(',').map(j => parseInt(j)));

  if (numArr.length == 0) {
    return [];
  }
  
  const [firstItem, ...rest] = numArr;

  return rest.reduce((result, item) => {
    return result.filter(i => item.includes(i));
  }, firstItem);
};
