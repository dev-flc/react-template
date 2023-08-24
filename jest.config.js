module.exports = {
  modulePathIgnorePatterns: ['/node_modules/(?!react_template).+.js$', '/src/'],
  setupFiles: ['dotenv/config'],
  testEnvironment: 'jsdom'
}
