export const findFactors = (numarr: number[], divisor: number): number[] => {
  return numarr.filter(x => x % divisor == 0);
};
