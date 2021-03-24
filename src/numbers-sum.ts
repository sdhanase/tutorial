

export const numbersSum = (numArr: Array<number>): number => {
  let i, sum = 0;

  for (i = 0; i < numArr.length; i++) {
    sum += numArr[i]
  }
  return sum;
};
