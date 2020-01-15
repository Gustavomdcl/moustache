const async = require('async');
const gulp = require('gulp');
const iconfont = require('gulp-iconfont');
const consolidate = require('gulp-consolidate');
const minifyCSS = require('gulp-minify-css');
const rename = require('gulp-rename');
const runTimestamp = Math.round(Date.now()/1000);

function IconFont(cb) {

    var iconStream = gulp.src(['../build/iconfont/svg/**/*.svg'])
      .pipe(iconfont({
        fontName: 'IconModule',
        prependUnicode: false,
        formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'],
        timestamp: runTimestamp,
      }));

    async.parallel([
      function handleGlyphs (cb) {
        iconStream.on('glyphs', function(glyphs, options) {
          gulp.src('../build/iconfont/iconfont.css')
            .pipe(consolidate('lodash', {
              glyphs: glyphs,
              fontName: 'IconModule',
              fontPath: 'font/',
              className: 'icon-module'
            }))
            .pipe(gulp.dest('../final/assets/iconfont/'))
            .pipe(minifyCSS())
            .pipe(rename({ extname: '.min.css' }))
            .pipe(gulp.dest('../final/assets/iconfont/'))
            .on('finish', cb);
        });
      },
      function handleFonts (cb) {
        iconStream
          .pipe(gulp.dest('../final/assets/iconfont/font/'))
          .on('finish', cb);
      }
    ], cb());
}



gulp.task('iconfont', function() {
	gulp.watch('../build/iconfont/svg/**/*.svg', IconFont);
});