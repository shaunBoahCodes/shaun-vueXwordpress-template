# vue-3-wordpress-template

This template should help get you started developing with Vue 3 in Vite in Wordpress.

## :open_file_folder: Setup

- Download and install wordpress locally
- Dowload and install MAMP (Mac)
- Run local server
- Clone this repo into wp-content/themes folder
- Run webpack compiler when change is made and refresh page


<br>
<br>
<br>
<br>

## :pushpin: Usage Guide
:bangbang: **IMPORTANT** 

When you make a change to any of the code, before you commit:
### 1. Generate tailwind classes to main.css 
```sh
npx tailwindcss -i ./src/assets/tailwind.css -o ./src/assets/main.css --watch
```
### 2. Bundle main.js using webpack compiler
```sh
npx webpack --mode production
```
<br>
Alternatively, use npm run dev to make and view minor changes. When ready to commit, use the above commands.
<br>
<br>
<br>
<br>


## :pencil2: Project Setup Commands

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
