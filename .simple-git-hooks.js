/**
 * @file 对simple-git-hooks的配置
 */

module.exports = {
  // 'prepare-commit-msg': 'exec < /dev/tty && npx cz --hook || true',
  'prepare-commit-msg': 'pnpm exec scripts/hooks/prepare-commit-msg.sh',
  'pre-commit': 'npx lint-staged',
};
