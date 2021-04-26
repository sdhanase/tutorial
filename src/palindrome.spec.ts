import { findpalindrome } from './find-palindrome';
describe('find palindrome', () => {
  test('for 121', () => {
    expect(findpalindrome(121)).toEqual(true);
  });
  test('for -121', () => {
    expect(findpalindrome(-121)).toEqual(false);
  });
  test('for 10', () => {
    expect(findpalindrome(10)).toEqual(false);
  });
  test('for -101', () => {
    expect(findpalindrome(-101)).toEqual(false);
  });
  test('for 2456542', () => {
    expect(findpalindrome(2456542)).toEqual(true);
  });
});
