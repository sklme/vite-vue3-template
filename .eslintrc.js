module.exports = {
  extends: ['./eslint/vue3-ts.js'],
  overrides: [
    {
      files: ['eslint/*.js', '.eslintrc.js'],
      env: {
        node: true,
      },
    },
  ],
};
