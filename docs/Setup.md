# Local environment setup

1. Use the designated version of node devine in [.nvmrc](/.nvmrc)
   - Use a tool like [nvm](https://github.com/nvm-sh/nvm) or [fnm](https://github.com/Schniz/fnm)

   ```shell
   nvm use
   ```

1. Install dependencies with npm

   ```shell
   npm install
   ```

1. Run the initialization script. This only has to be done once. It performs the following:
   - Sets up a pre-commit hook for [linting/formatting](./Linting.md)
   - Creates local environment files that are ignored by git

   ```shell
   npm run init
   ```

1. Start the local dev server

   ```shell
   # application
   > npm start [project]

   # storybook
   > npm run sb:start [project]
   ```
