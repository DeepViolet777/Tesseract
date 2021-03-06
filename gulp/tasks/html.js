const gulp = require('gulp')
const plumber = require('gulp-plumber')
const htmlValidator = require('gulp-w3c-html-validator')
const bemValidator = require('gulp-html-bem-validator')
const config = require('../config')
/*
module.exports = function pug2html() {
  return gulp.src('src/pages/*.pug')
    .pipe(plumber())
    .pipe(pugLinter({ reporter: 'default' }))
    .pipe(pug({ pretty: config.pug2html.beautifyHtml }))
    .pipe(htmlValidator())
    .pipe(bemValidator())
    .pipe(gulp.dest('build'))
}
*/


module.exports = function index() {
  return gulp.src('src/pages/index.html')
    .pipe(plumber())
    .pipe(htmlValidator())
    .pipe(bemValidator())
    .pipe(gulp.dest('build/'))
}
