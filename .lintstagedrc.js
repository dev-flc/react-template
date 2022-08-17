module.exports = {
  '*.(js|jsx|json)': 'npm run prettier:check',
  '*.(js|jsx|json|)': 'npm run lint:check',
  '*.{css,scss}': 'npm run style:check',
};
