import { convertTextUpperOrLower } from './../../src/utils/utils'

describe('UTILS', () => {
  test('convertTextUpperOrLower converts lowercase text to uppercase', () => {
    const [text, status] = convertTextUpperOrLower('example')
    expect(text).toBe('EXAMPLE')
    expect(status).toBe(false)
  })

  test('convertTextUpperOrLower converts uppercase text to lowercase', () => {
    const [text, status] = convertTextUpperOrLower('EXAMPLE')
    expect(text).toBe('example')
    expect(status).toBe(true)
  })

  test('convertTextUpperOrLower handles empty string', () => {
    const [text, status] = convertTextUpperOrLower('')
    expect(text).toBe(true)
    expect(status).toBe(true)
  })

  test('convertTextUpperOrLower handles non-alphabetic characters', () => {
    const [text, status] = convertTextUpperOrLower('1234')
    expect(text).toBe('1234')
    expect(status).toBe(true)
  })
})
