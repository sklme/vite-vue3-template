module.exports = {
  extends: [
    './eslint/vue3-ts-typecheck.js',
    './.eslintrc-auto-import.json',
    'prettier',
  ],
  overrides: [
    {
      files: ['./*.ts'],
      env: {
        node: true,
      },
      parserOptions: {
        project: null,
      },
    },
  ],
};
