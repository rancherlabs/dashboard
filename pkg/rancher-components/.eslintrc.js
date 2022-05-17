module.exports = {
  root: true,
  env:  {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console':                  process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger':                 process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-mutating-props':       'warn',
    semi:                          ['warn', 'always'],
    'comma-dangle':                ['warn', 'only-multiline'],
    'space-before-function-paren': ['warn', 'never'],

    'key-spacing': ['warn', {
      align: {
        beforeColon: false,
        afterColon:  true,
        on:          'value',
        mode:        'minimum'
      },
      multiLine: {
        beforeColon: false,
        afterColon:  true
      }
    }]
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
        '**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
};
