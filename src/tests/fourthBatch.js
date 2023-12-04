const {sleep} = require('./utils')

describe('fourth batch', () => {
  const functions = {
    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2,
    multiply: (num1, num2) => num1 * num2,
    divide: (num1, num2) => num1 / num2,
    isNull: () => null,
  }

  test('adds 2 + 2 to equal 4', () => {
    sleep(5)
    expect(functions.add(2, 2)).toBe(4)
  })

  test('subtracts 5 - 3 to equal 2', () => {
    sleep(5)
    expect(functions.subtract(5, 3)).toBe(2)
  })

  test('multiplies 3 * 3 to equal 9', () => {
    sleep(5)
    expect(functions.multiply(3, 3)).toBe(9)
  })

  test('divides 10 / 2 to equal 5', () => {
    sleep(5)
    expect(functions.divide(10, 2)).toBe(5)
  })

  test('should be null', () => {
    sleep(5)
    expect(functions.isNull()).toBeNull()
  })
})
