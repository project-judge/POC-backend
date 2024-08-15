
import binarySearch from './binary-search';
import {describe, it, expect} from 'vitest'

describe('binarySearch', () => {
  it('target value', () => {
    expect(binarySearch([1, 2, 3, 10, 11, 20], 2)).toBe(1);
  });

  it('boundary value', () => {
    expect(binarySearch([1, 2, 3, 10, 11, 20], 20)).toBe(5);
  });

  it('non-existent value', () => {
    expect(binarySearch([1, 2, 3, 10, 11, 20], 9)).toBe(-1);
  });
});
    