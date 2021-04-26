import { firstfact } from './first-factorial';
describe('first fact', () => {
  test('for 4', () => {
    expect(firstfact(4)).toEqual(24);
  });
  test('for 8', () => {
    expect(firstfact(8)).toEqual(40320);
  });
  test('for 12', () => {
    expect(firstfact(12)).toEqual(479001600);
  });
  test('for 15', () => {
    expect(firstfact(15)).toEqual(1307674368000);
  });
});
