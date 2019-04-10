const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', ['build'], function () {
    console.log('gulp 启动');
});

gulp.task('build', function () {
    gulp.src(['./src/nodeuii/**/*.js'])
        .pipe(babel(
            {
                "babelrc": false,
                "plugins": ["transform-es2015-modules-commonjs"]
            }
        ))
        .pipe(gulp.dest('./build'))
})

gulp.task('watch', function () {
    gulp.watch('./src/nodeuii/**/*.js', ['build'])
})

