export const fibonacci = (num: number): Array<number> => {

  const a = [];
  let i;

  if (num == 1) {
    throw 'Invalid input! Constraint: n > 1.';
  }
  else {
    a[0] = 0;
    a[1] = 1;
    for (i = 2; i < num + 1; i++) {
      a[i] = a[i - 2] + a[i - 1];
    }
    return a;
  }
};
