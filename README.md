# V2 Front-end Monorepo :muscle:

## Overview :eyeglasses:

This repository was created for the new v2 FE project. It uses a monorepo approach leveraged by [Yarn Workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/), besides custom configuration to make ESLint and Webpack work on a monorepo scenario (e.g. understanding modules aliases, recognizing aliases as `internal`s...).

The idea is that this FE will initially work through React embeddable components, which are going to be embeded into the original v1 FE structure. Overall, the embeddable approach is done purely through Webpack and [shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM).

## Requirements :lock:

Since this project uses Yarn Workspaces, the usage of [Yarn](https://yarnpkg.com/) is required (and forced), so make sure have it installed.

In order to install Yarn, you must have [npm](https://npmjs.com/) installed first, which is installed automatically with Node. It is recommended to use [nvm](nvm.sh) to manage different Node versions.

If you're using Windows, considering using [WSL](https://docs.microsoft.com/en-us/windows/wsl/install) instead of Powershell, as it will provide a full Linux experience inside Windows (and in VSCode), meaning that you won't have to struggle against Windows-related issues.

**Required dependencies**:

- Node v14.17.x
- Yarn v1.22.x

## Installing dependencies :book:

As mentioned above, the recommended approach is to use nvm to install the required Node version, to then install Yarn through it.

The installation process is really simple, and is described below:

```sh
# Installs nvm (not necessary if already installed)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
# Double check if your `.zshrc` or `.bashrc` has the following entry:
# export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
# [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

# Installs the expected Node.js LTS version
nvm install lts/gallium

# Installs `yarn` globally (only for this Node version)
npm i -g yarn

# Double check if `yarn` has the expected version (1.22.x)
yarn -v

# Installs the project's dependencies (run in the project's root directory)
yarn
```

### Third party libraries

Since this is a monorepo project, dependencies can be either shared by all packages, or be package exclusive.

When installing a dependency in the project, you should always consider if more than one package is going to use such dependency: if the answer is yes, then install it as a shared dependency.

When installing a shared dependency, you should run the `add` command from the root folder of the project.

```sh
# Installing a shared dependency
yarn add -W dependency-name

# Installing a shared dev. dependency
yarn add -WD dependency-name
```

When installing a package exclusive dependency, just run the normal `yarn add` from the package folder itself.

## Creating builds :package:

Keep in mind that, since we're in a monorepo scenario, each folder inside `packages` is a single project by itself, meaning that is has its own `build` commands.

Each package can be built in two different ways: `production` and `dev`.

When building a package in development mode, the final bundle will include an `index.html` file, meaning that the output can be served with `serve` or any other web server (since the output is just static files).

Now, when bundling the application in production mode, the final bundle _won't_ include an `index.html`, so the only way to render the embeddable components is to use the resulting script file as the `src` of a `<script>` tag and then calling the web component manually in the DOM.

```sh
# Building the package in development mode
yarn build:dev

# Building the package in production mode
# Triggering a build command will clean the previous `dist` folder
yarn build:production
```

## Running locally :computer:

The same rule applied to builds is applied here: since this is a monorepo, each project has its own `start` command.

There are a couple of different ways to run each project locally:

### `webpack-dev-server`

The first (and most common one) is through [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server), which provides hot reload out of the box. It will load the `index.html` located inside the `public` folder of the package, and serve that in `localhost:3000` by default.

```sh
# Runs the `webpack-dev-server`
yarn dev
```

### `serve`

The second one is through [serve](https://github.com/vercel/serve) by running the build command, meaning that it'll run in a "production-like" build in a blazing fast web server. This approach doesn't include hot reload, so it's only recommended for debugging and testing purposes.

```sh
# Installs `serve` globally
yarn add global serve

# Creates the dev build
# This build includes the `index.html` file on the output
yarn build:dev

# Run the web server by serving the application
serve -s dist
```
