const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const prune = require('gulp-prune');

function Es6(cb) {

		return gulp.src('../build/es6/**/*.js')
		.pipe(prune('./babel/'))
    .pipe(gulp.dest('./babel/'));

    cb();
}

function Javascript(cb) {

	return gulp.src('../build/js/**/*.js')
    .pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(rename({ extname: '.min.js' }))
		.pipe(gulp.dest('../final/assets/js/'));

	cb();
}

gulp.task('javascript', function() {
	gulp.watch('../build/js/**/*.js', Javascript);
	gulp.watch('../build/es6/**/*.js', Es6);
});