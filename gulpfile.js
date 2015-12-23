
var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var sass = require('gulp-sass');

var pathSrc = 'build/';
var pathDist = 'src/';

gulp.task('clean', function () {
  return gulp.src(pathDist + '*.css')
    .pipe(clean());
});

gulp.task('css', ['clean'], function () {
  return gulp.src(pathSrc + 'styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('x-ui.css'))
    .pipe(gulp.dest(pathDist));
});

gulp.task('default', ['css'], function() {
  gulp.watch(pathSrc + 'styles/*.scss', ['css']);
});
/*********** dev end ***********/