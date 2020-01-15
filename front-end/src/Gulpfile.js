const gulp = require('gulp');

require('./gulpTasks/html');
require('./gulpTasks/css');
require('./gulpTasks/image');
require('./gulpTasks/iconfont');
require('./gulpTasks/javascript');
require('./gulpTasks/server');

exports.default = gulp.parallel('html', 'css', 'image', 'iconfont', 'javascript', 'server');
