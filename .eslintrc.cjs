module.exports = {
  extends: ['standard'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'svelte3',
    '@typescript-eslint',
  ],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  rules: {
    // https://github.com/sveltejs/eslint-plugin-svelte3/issues/41
    'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 2, maxEOF: 0 }],
  },
  settings: {
    'svelte3/typescript': true,
  }}