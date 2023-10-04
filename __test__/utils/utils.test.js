import { convertTextUpperOrLower } from './../../src/utils/utils'

describe('🤖 UTILS', () => {
  test('🚀 convertTextUpperOrLower CONVERT LOWERCASE TEXT TO UPPERCASE', () => {
    const [text, status] = convertTextUpperOrLower('example')
    expect(text).toBe('EXAMPLE')
    expect(status).toBe(false)
  })

  test('🚀 convertTextUpperOrLower CONVERT UPPERCASE TEXT TO LOWERCASE', () => {
    const [text, status] = convertTextUpperOrLower('EXAMPLE')
    expect(text).toBe('example')
    expect(status).toBe(true)
  })

  test('🚀 convertTextUpperOrLower HANDLES EMPTY STRING', () => {
    const [text, status] = convertTextUpperOrLower('')
    expect(text).toBe(true)
    expect(status).toBe(true)
  })

  test('🚀 convertTextUpperOrLower HANDLES NON ALPHABETIC CHARACTER', () => {
    const [text, status] = convertTextUpperOrLower('1234')
    expect(text).toBe('1234')
    expect(status).toBe(true)
  })
})
