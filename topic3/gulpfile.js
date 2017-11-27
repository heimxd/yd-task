const gulp = require('gulp');
const path = require('path');
const server = require('gulp-develop-server');

gulp.task('server:start', function () {
    server.listen({
        path: './app.js',
        env: {
            port: 3000
        }
    })
});

gulp.task('server:restart', function () {
    server.restart();
});

gulp.task('default', ['server:start'], function (e) {
    gulp.watch('./app.js', ['server:restart']);
}); 

