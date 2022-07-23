  # Only run commitizen if no commit message was already provided.
  if [ -z "${2-}" ]; then
    export CZ_TYPE="${CZ_TYPE:-fix}"
    export CZ_MAX_HEADER_WIDTH=$COMMITLINT_MAX_WIDTH
    export CZ_MAX_LINE_WIDTH=$CZ_MAX_HEADER_WIDTH
    # By default git hooks are not interactive. exec < /dev/tty allows a users terminal to interact with commitizen.
    exec < /dev/tty && "$(dirname "$0")/git-cz.js" --hook
  fi