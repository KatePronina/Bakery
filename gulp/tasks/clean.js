'use strict';

module.exports = function () {
	$.gulp.task('clean', function () {
		return $.del([
			'build'
		]);
	});
};