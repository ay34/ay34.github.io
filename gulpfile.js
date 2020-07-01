const gulp = require('gulp')
const sass = require('gulp-sass')
const prefix = require('gulp-autoprefixer')
const plumber = require('gulp-plumber')
const pug = require('gulp-pug')


gulp.task('css', () => {
  return gulp.src('./scss/main.scss')
  .pipe(plumber([{ errorHandler: false }]))
  .pipe(sass())
  .pipe(prefix())
  .pipe(gulp.dest('./'))
  .pipe(browserSync.stream())
})

gulp.task('html', () => {
  return gulp.src('./views/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('./'))
  .on('end', reload)
})

gulp.task('default', ['html', 'css'])
