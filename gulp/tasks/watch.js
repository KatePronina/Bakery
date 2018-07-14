'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    $.gulp.watch('./source/style/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch('./source/index.html', $.gulp.series('html'));
    $.gulp.watch('./img/images/*', $.gulp.series('image'));
    $.gulp.watch('./js/*', $.gulp.series('concat'));
  });
};