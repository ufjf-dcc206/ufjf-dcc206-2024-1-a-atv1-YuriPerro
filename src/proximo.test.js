import { describe, expect, test } from 'vitest';

import { proximo } from './proximo';

describe('proximo', () => {
  test('proximo(0) retorna 1', () => {
    expect(proximo(0)).toBe(1);
  });

  test('proximo(1) retorna 3', () => {
    expect(proximo(1)).toBe(3);
  });

  test('proximo(2) retorna 5', () => {
    expect(proximo(2)).toBe(5);
  });

  test('proximo(4) retorna 4', () => {
    expect(proximo(3)).toBe(4);
  });
});
