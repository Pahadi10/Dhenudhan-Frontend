## Run package

It will load the `index.html` located inside the `public` folder of this package, and serve that in `localhost:3000` by default.

```sh
# Runs the `webpack-dev-server`
yarn dev
```

⚠️ DO NOT use `npm` in the repository. It has to be `yarn` because we use [yarn workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/).

## Environment variables

⚠️ Locally, environment variables are specified in `.env` file, with `.env.example` as a reference.

Once you add or update a `.env` file, you should rerun the application to apply the changes. (`yarn dev`).

For deployed versions, environment variables are specific in `buildspec.yml`file.
