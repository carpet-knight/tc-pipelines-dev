const {sleep} = require('./utils')

describe('third batch', () => {
  const functions = {
    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2,
    multiply: (num1, num2) => num1 * num2,
    divide: (num1, num2) => num1 / num2,
    isNull: () => null
  }

  test('adds 1 + 2 to equal 3', () => {
    sleep(5)
    expect(functions.add(1, 2)).toBe(3)
  })

  test('subtracts 5 - 2 to equal 3', () => {
    sleep(5)
    expect(functions.subtract(5, 2)).toBe(3)
  })

  test('multiplies 4 * 4 to equal 16', () => {
    sleep(5)
    expect(functions.multiply(4, 4)).toBe(16)
  })

  test('divides 12 / 6 to equal 2', () => {
    sleep(5)
    expect(functions.divide(12, 6)).toBe(2)
  })

  test('returns null', () => {
    sleep(5)
    expect(functions.isNull()).toBeNull()
  })
})
