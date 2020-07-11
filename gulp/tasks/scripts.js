const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
// const plumber = require('gulp-plumber');
// const babel = require('gulp-babel');
// const uglify = require('gulp-uglify');
// const concat = require('gulp-concat');
// const mode = require('gulp-mode')();
const paths = require('../paths');

const scripts = () => {
  return browserify(paths.src.js)
  .transform('babelify', {
    presets: ['@babel/preset-env']
  })
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest(paths.build.js));
};

module.exports = scripts;
