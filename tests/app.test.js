const { add } = require('../app');

test('sum of 2 and 3 should be 5', () => {
  expect(add(2, 3)).toBe(5);
});
