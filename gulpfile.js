var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src('sass/view-all.scss')
        .pipe(sass())
        .pipe(sass({
            includePaths: require('node-normalize-scss').with('other/path', 'another/path')
          }))
        .pipe(gulp.dest('css'))
});