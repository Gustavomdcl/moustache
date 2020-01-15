const gulp = require('gulp');
const webserver = require('gulp-webserver');

gulp.task('server', function() {
	gulp.src('../final')
		.pipe(webserver({
		livereload: true,
		port: 4444,
		open: true
	}));
});