'use strict'

module.exports = function () {
	$.gulp.task('concat', function() {
	return $.gulp.src('./js/*.js')
		.pipe($.gp.concat('app.js'))
		.pipe($.gulp.dest('./build/js'))
});
}
