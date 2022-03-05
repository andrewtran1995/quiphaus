module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    extraFileExtensions: ['.svelte'],
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  plugins: [
    'svelte3',
    '@typescript-eslint',
  ],
  overrides: [
    {
      files: ['*.svelte'],
      // https://github.com/sveltejs/eslint-plugin-svelte3/issues/81
      rules: {
        'import/first': ['off'],
        'import/no-duplicates': ['off'],
        'import/no-mutable-exports': ['off'],
        'import/prefer-default-export': ['off'],
        'no-use-before-define': ['off'],
      },
      processor: 'svelte3/svelte3',
    },
  ],
  rules: {
    // https://github.com/sveltejs/eslint-plugin-svelte3/issues/41
    'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 2, maxEOF: 0 }],
  },
  settings: {
    'svelte3/typescript': () => require('typescript'),
  }}