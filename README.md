# Vuetify PWA/Electron App Scaffolding/Boilerplate

Scaffolding for a new project requiring both a PWA and a desktop app (Electron) running from the same code.

Mostly generated from vue-cli 3 with some personal touches.

___

## Includes
* Vuetify
* PWA (starter manifest, icons and registerServiceWorker.js)
* Electron 4.0
* Vuex store
* Vue-router
* Axios
* SASS/SCSS compilers (node-sass)
* ESLint configured with prettier and @vue/essential
* Browsersync
___

## Project setup
Install dependencies as per *package.json*
```sh
npm install
```

### Development
Compiles and hot-reloads for development

* Browser

  ```sh
  npm run serve
  ```

* Electron

  ```sh
  npm run electron
  ```

### Lints and fixes files
```sh
npm run lint
```

### Compiles and minifies for production
* Browser

  ```sh
  npm run build
  ```

* Electron (build desktop executables)

  ```sh
  npm run electron:build
  ```
___

#### .eslintrc.js (optional recommended config)
```javascript
module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    'plugin:vue/essential',
    'plugin:prettier/recommended',
    'eslint:recommended'
  ],

  parserOptions: {
    parser: 'babel-eslint'
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  }
}
```
___

See [Configuration Reference](https://cli.vuejs.org/config/) for vue-cli configuration.
