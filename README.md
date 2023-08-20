# wordpress-template

This template should help get you started developing with Vue 3 in Vite in Wordpress.

## Setup

- Download and install wordpress locally
- Dowload and install MAMP (Mac)
- Run local server
- Clone this repo into wp-content/themes folder
- run webpack compiler when change is made and refresh page

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
npm run dev
npm run build
npm run test:unit
npm run lint
```

### Install Webpack dependencies 
```sh
npm install webpack webpack-cli --save-dev
npm install -D vue-loader vue-template-compiler
npm install babel-loader css-loader
```

### Run Webpack compiler
```sh
npx webpack --mode production
```

