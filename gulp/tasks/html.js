module.exports = function () {
	$.gulp.task('html', function() {
	return $.gulp.src('./source/index.html')
		.pipe($.gulp.dest('./build'))
	});
}