import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
  build: {
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    img: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`,
    files: `${buildFolder}/files/`,
  },
  src: {
    js: `${srcFolder}/js/app.js`,
    scss: `${srcFolder}/scss/style.scss`,
    html: `${srcFolder}/*.html`,
    // svg: `${srcFolder}/img/**/*.svg`,
    img: `${srcFolder}/img/**/*.{jpeg,jpg,png,gif,webp,svg}`,
    files: `${srcFolder}/files/**/*.*`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
    img: `${srcFolder}/img/**/*.{jpeg,jpg,png,gif,webp,svg}`,
    files: `${srcFolder}/files/**/*.*`,
  },
  clean: [`${buildFolder}/**/*.*`, `!${buildFolder}/fonts/*.*` ],
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: '',
}