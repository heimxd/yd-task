var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

// add tests
suite.add('getweek', function () {
    let week = new Date().getDay();
    let weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    return weeks[week];
})
    .add('getweek2', function () {
        let week = new Date().getDay();
        if (week == 1) {
            return '星期一';
        } else if (week == 2) {
            return '星期二';
        } else if (week == 3) {
            return '星期三';
        } else if (week == 4) {
            return '星期四';
        } else if (week == 5) {
            return '星期五';
        } else if (week == 6) {
            return '星期六';
        } else if (week == 0) {
            return '星期日';
        }
    })
    // add listeners
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });