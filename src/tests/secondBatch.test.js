const {sleep} = require('./utils')

describe('second batch', () => {
  test('the shopping list has milk on it', () => {
    sleep(10)
    expect(['milk', 'eggs', 'bread']).toContain('milk');
  })

  function compileAndroidCode() {
    throw new Error('you are using the wrong JDK');
  }

  test('compiling android goes as expected', () => {
    sleep(10)
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);
  })

  async function fetchData() {
    return 'peanut butter'
  }

  test('the data is peanut butter', async () => {
    sleep(10)
    const data = await fetchData();
    expect(data).toBe('peanut butter')
  })

  test('the data is present', () => {
    sleep(10)
    return fetchData().then(data => {
      expect(data).toBeTruthy();
    });
  })

  test('truthy test', () => {
    sleep(10)
    expect('Jest').toBeTruthy();
  })
})
