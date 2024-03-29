const JS_DECLARATIONS = ['const', 'let', 'var', 'import']

module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      classes: true,
      defaultParams: true,
      experimentalObjectRestSpread: true,
    }
  },
  ignorePatterns: [ '**/out/*.js', '**/vendor/*.js', '**/dist/*.js'],
  rules: {
    'arrow-spacing': ['error', { before: true, after: true }],
    'block-spacing': ['error', 'always'],
    'brace-style': 0,
    'comma-spacing': ['error', { before: false, after: true }],
    'computed-property-spacing': ['error', 'never'],
    'eol-last': ['error', 'always'],
    'indent': [2, 2, { ignoredNodes: ['TemplateLiteral *']}],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'keyword-spacing': ['error', { overrides: {
      if: { after: false },
      for: { after: false },
      while: { after: false }
    }}],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: false }],
    'no-irregular-whitespace': ['error', { skipRegExps: true }],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],
    'no-return-await': ['error'],
    'no-trailing-spaces': ['error'],
    'object-curly-spacing': ['error', 'always', { arraysInObjects: false, objectsInObjects: false }],
    'padding-line-between-statements': ['error',
      { blankLine: 'never', prev: '*', next: '*' },
      { blankLine: 'any', prev: 'block-like', next: '*' },
      { blankLine: 'always', prev: 'multiline-expression', next: '*' },
      { blankLine: 'any', prev: '*', next: ['multiline-expression', 'expression']},
      { blankLine: 'never', prev: JS_DECLARATIONS, next: JS_DECLARATIONS },
      { blankLine: 'any', prev: JS_DECLARATIONS, next: '*' },
      { blankLine: 'always', prev: JS_DECLARATIONS, next: ['function', 'class']},
      { blankLine: 'any', prev: '*', next: JS_DECLARATIONS },
      { blankLine: 'any', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'multiline-const' },
      { blankLine: 'always', prev: 'multiline-const', next: '*' },
      { blankLine: 'any', prev: '*', next: ['cjs-export', 'export']},
      { blankLine: 'any', prev: ['cjs-export', 'export'], next: '*' },
      { blankLine: 'always', prev: '*', next: ['class', 'function']},
      { blankLine: 'any', prev: '*', next: 'if' }
    ],
    'quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'quote-props': ['error', 'consistent-as-needed'],
    'semi-spacing': ['error', { before: false, after: true }],
    'semi-style': ['error', 'first'],
    'semi': ['error', 'never'],
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': ['error'],
    'space-unary-ops': ['error'],
    'spaced-comment': ['error', 'always'],
    'switch-colon-spacing': ['error', { after: true, before: false }],
    'template-curly-spacing': ['error', 'never'],
    'template-tag-spacing': ['error', 'always'],
  }
}
