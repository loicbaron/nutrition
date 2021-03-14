module.exports = {
  plugins: [
    'react',
    'babel',
    'formatjs',
  ],
  extends: [
    'airbnb',
    'plugin:react/recommended',
  ],
  env: {
    browser: true,
    jest: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  parser: 'babel-eslint',
  rules: {
    'babel/semi': 1,
    'jsx-a11y/label-has-for': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-filename-extension': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'formatjs/no-offset': 'error',
  },
};
