module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'react/no-unknown-property': 'off',
    'no-unused-vars': ['warn'],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'indent': ['error', 2],
    'react/jsx-tag-spacing': ['error', {
      'beforeSelfClosing': 'always',
    }],
    'max-len': ['error', {
      'code': 120,
      'ignoreComments': true,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true,
      'ignoreUrls': true,
    }],
  }
};
