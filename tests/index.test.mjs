import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('classifies positive values', () => {
  assert.equal(api.classifyNumber(3), 'positive');
});
test('classifies negative values', () => {
  assert.equal(api.classifyNumber(-3), 'negative');
});
test('classifies zero', () => {
  assert.equal(api.classifyNumber(-0), 'zero');
});
test('classifies NaN', () => {
  assert.equal(api.classifyNumber(NaN), 'nan');
});
test('classifies both infinities', () => {
  assert.equal(api.classifyNumber(Infinity), 'positive-infinity');
  assert.equal(api.classifyNumber(-Infinity), 'negative-infinity');
});
test('rejects non-number input', () => {
  assert.throws(() => api.classifyNumber('3'), TypeError);
});
