module.exports = {
  extends: ['./eslint/vue3-ts-typecheck.js', 'prettier'],
  overrides: [
    {
      files: ['vite.config.ts'],
      env: {
        node: true,
      },
      parserOptions: {
        project: null,
      },
    },
  ],
};
