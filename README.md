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
```
npm install
```

### Development
Compiles and hot-reloads for development

* Browser

  ```
  npm run serve
  ```

* Electron

  ```
  npm run electron
  ```

### Lints and fixes files
```
npm run lint
```

### Compiles and minifies for production
* Browser

  ```
  npm run build
  ```

* Electron (build desktop executables)

  ```
  npm run electron:build
  ```
___

See [Configuration Reference](https://cli.vuejs.org/config/) for vue-cli configuration.
