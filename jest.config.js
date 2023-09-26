module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  moduleFileExtensions: ['js', 'json', 'jsx'],
  modulePathIgnorePatterns: ['/node_modules/(?!react_template).+.js$', '/src/'],
  setupFiles: ['dotenv/config'],
  testEnvironment: 'jsdom',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$',
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  }
}
