import {sum} from '../lib/example';

describe('tests', () => {
  it('example', () => {
    const result = sum(3, 5);
    expect(result).toBe(8);
  });
});
