import { usernameValidation } from './username-validation';

describe('validate username', () => {
  test('username1', () => {
    expect(usernameValidation("aa_")).toEqual(false);
  });
  test('username2', () => {
    expect(usernameValidation("u__hello_world123")).toEqual(true);
  });
  test('username3', () => {
    expect(usernameValidation("9world123")).toEqual(false);
  });
  test('username4', () => {
    expect(usernameValidation("world123+++")).toEqual(false);
  });
  test('username5', () => {
    expect(usernameValidation("u__hello_world_")).toEqual(false);
  });
});
