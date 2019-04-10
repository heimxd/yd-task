const router = require('koa-simple-router');
aaa = []
const controller = {
    init(app) {
        app.use(router(_ => {
            _.get('/', async ctx => {
                aaa.push(ctx.url);
                ctx.body = await ctx.render('index', { data: 'abc' });
            })
            _.get('/error', (ctx, next) => {
                console.log(a);
            })
            _.get('*', async ctx => {
                ctx.status = 404
                ctx.body = await ctx.render('404');
            })
        })
        )
    }
}

module.exports = controller;