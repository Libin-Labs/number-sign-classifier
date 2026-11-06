export type NumberSign =
  'nan' | 'positive-infinity' | 'negative-infinity' | 'zero' | 'positive' | 'negative';
export function classifyNumber(value: number): NumberSign {
  if (typeof value !== 'number') throw new TypeError('Expected number');
  if (Number.isNaN(value)) return 'nan';
  if (value === Infinity) return 'positive-infinity';
  if (value === -Infinity) return 'negative-infinity';
  if (value === 0) return 'zero';
  return value > 0 ? 'positive' : 'negative';
}
