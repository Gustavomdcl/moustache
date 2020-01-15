const gulp = require('gulp');
const image = require('gulp-image');
const prune = require('gulp-prune');

function Image(cb) {

  return gulp.src('../build/images/**/*')
  .pipe(image({
    pngquant: true,
    optipng: false,
    zopflipng: true,
    jpegRecompress: false,
    jpegoptim: true,
    mozjpeg: true,
    gifsicle: true,
    svgo: true,
    concurrent: 10
  }))
  .pipe(prune('../final/images'))
  .pipe(gulp.dest('../final/images'));

  cb();
}

function Img(cb) {

  return gulp.src('../build/img/**/*')
  .pipe(image({
    pngquant: true,
    optipng: false,
    zopflipng: true,
    jpegRecompress: false,
    jpegoptim: true,
    mozjpeg: true,
    gifsicle: true,
    svgo: true,
    concurrent: 10
  }))
  .pipe(prune('../final/assets/img'))
  .pipe(gulp.dest('../final/assets/img'));

  cb();
}

gulp.task('image', function() {
  gulp.watch('../build/images/**/*', Image);
  gulp.watch('../build/img/**/*', Img);
});