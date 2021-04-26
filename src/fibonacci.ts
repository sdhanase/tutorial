export const fibonacci = (inputNum: number): Array<number> => {
  let result = [0, 1];
  if (inputNum > 1) {
    for (let i = 2; i <= inputNum; i++) {
      result.push(result[i - 2] + result[i - 1]);
    }
    return result;
  }
  else {
    throw 'Invalid input! Constraint: n > 1.';
  }
};
