import { longword } from './longest-word';

describe('valifind longest word', () => {
  test('word 1', () => {
    expect(longword("fun&!! time")).toEqual("time");
  });
  test('word 2', () => {
    expect(longword("I love dogs")).toEqual("love");
  });

});
