const indexController = require('./index');

const init = function (app, router) {
    if (!(app && router)) {
        throw new Error('app and router are necessary parameters');
    }
    app.use(router(_ => {
        _.get('/', async (ctx, next) => {
            ctx.body = 'hello world';
        })
        _.get('/error', (ctx, next) => {
            console.log('测试错误', a);
        })

        _.get('/index/index', indexController.index());

        _.get('/index/update', indexController.update());

    }))
}

module.exports = {
    init
};

