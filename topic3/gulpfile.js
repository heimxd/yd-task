const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', ['babel', 'watch']);

gulp.task('babel', () => {
    gulp.src(__dirname + '/app.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest(__dirname + '/build'))
});

gulp.task('watch', () => {
    gulp.watch(__dirname + '/app.js', ['babel']);
});

/* 
php入门到精通
锋利的jQuery
jQuery技术内幕
css那些事
c#项目开发实战入门
***淘宝技术这十年
高性能linux服务器构建实站
JavaScript语言精粹
前端架构设计（脱节）
JavaScript机器人编程指南
写给儿童的css（未找到）
***css揭秘
JavaScript数据可视化
前端黑客技术揭秘
web安全与机器学习入门
three.js开发指南
大话数据结构与算法
啊哈算法
编程之美
疯狂的程序员
过得刚好
*/