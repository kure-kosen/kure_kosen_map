module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 8,
    sourceType: 'module'
  },
  rules: {
    'no-console': 'off',
    'linebreak-style': ['error', 'unix'],
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single'],
    semi: ['error', 'never']
  }
}
