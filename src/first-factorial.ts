export const firstfact = (num: number): number => {

  let total = 1;

  for (let i = num; i > 1; i--) {
    total = total * i;
  }
  return total;
};
