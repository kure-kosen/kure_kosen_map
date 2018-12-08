module.exports = {
  root: true,
  env: { browser: true, es6: true },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6,
    sourceType: 'module'
  },
  extends: ['plugin:vue/recommended', 'plugin:prettier/recommended'],
  plugins: ['vue', 'prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': ['error', 'unix'],
    indent: ['error', 2],
    quotes: ['error', 'double'],
    semi: ['error', 'always'],
    'semi-spacing': ['error', { after: true, before: false }],
    'semi-style': ['error', 'last'],
    'no-extra-semi': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error'
  }
}
