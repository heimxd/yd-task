const rp = require('request-promise');
const index = function () {
    return async (ctx, next) => {
        ctx.body = await ctx.render('index/thumb.html');
    }
}
const update = function () {
    return async (ctx, next) => {
        ctx.body = await new Promise((resolve, reject) => {
            rp('http://localhost/ydtask/praise.php')
                .then(function (data) {
                    resolve(data)
                }).catch(function (err) {
                    reject('error')
                })
        });
    }
}
module.exports = {
    index,
    update
}