module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': 'off',
    'prefer-default-export': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-unused-vars':0,
    // maximum line length
    'max-len': [1, {
      code: 100,
      tabWidth: 2,
      ignoreComments: true,
      ignoreUrls: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true
    }],
    'no-return-await': 'off',
    'comma-dangle': ['error', {
      arrays: 'never',
      objects: 'ignore',
      imports: 'never',
      exports: 'never',
      functions: 'never'
    }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
