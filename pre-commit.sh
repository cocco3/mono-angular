#!/bin/sh

ensure_node() {
  if command -v node >/dev/null 2>&1; then
    return 0
  fi

  # try nvm
  export NVM_DIR="$HOME/.nvm"
  if [ -s "$NVM_DIR/nvm.sh" ]; then
    . "$NVM_DIR/nvm.sh"
    nvm use >/dev/null 2>&1 && return 0
  fi

  # try fnm
  if command -v fnm >/dev/null 2>&1; then
    fnm use >/dev/null 2>&1 && return 0
  fi

  return 1
}

if ensure_node; then
  npx nano-staged
else
  echo "No Node.js found. Skipping nano-staged."
  exit 0
fi
