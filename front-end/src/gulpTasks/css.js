const gulp = require('gulp');
const rename = require('gulp-rename');
const compass = require('gulp-for-compass');
const minifyCSS = require('gulp-minify-css');

function Css(cb) {

  return gulp.src('../build/sass/**/*.scss')
  .pipe(compass({
      sassDir: '../build/sass',
      cssDir: '../build/css',
      force: true
  }))
  .pipe(minifyCSS())
  .pipe(rename({ extname: '.min.css' }))
  .pipe(gulp.dest('../final/assets/css'));

  cb();
}

gulp.task('css', function() {
  gulp.watch('../build/sass/**/*.scss', Css);
});