const {sleep} = require('./utils')

test('basic test', () => {
  console.log(process.env)
  sleep(10)
  expect(true).toBe(true);
})

test('equality test', () => {
  sleep(10)
  expect(5).toEqual(5);
})

test('null', () => {
  sleep(10)
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
})

test('object assignment', () => {
  sleep(10)
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
})

test('adding positive numbers is not zero', () => {
  sleep(10)
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
})
