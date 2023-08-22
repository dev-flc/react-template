import { convertTextUpperOrLower } from './../../src/utils/utils'

describe('test convertTextUpperOrLower', () => {
  test('converts lowercase text to uppercase', () => {
    const { 0: text, 1: status } = convertTextUpperOrLower('example')
    expect(text).toBe('EXAMPLE')
    expect(status).toBe(false)
  })

  test('converts uppercase text to lowercase', () => {
    const { 0: text, 1: status } = convertTextUpperOrLower('EXAMPLE')
    expect(text).toBe('example')
    expect(status).toBe(true)
  })
})
