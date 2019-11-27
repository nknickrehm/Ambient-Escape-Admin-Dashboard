# Ambient-Escape-Admin-Dashboard

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Project structure
The app has only one route `/` and behaves like a single page application. The two different views are stored in the `components` folder which contains sub folders for both meta groups involved.

The GameState can be updated through the custom event `changeGameState`. Please use the enum stored in `/helpers/gamestate.js` for the GameState values. 
