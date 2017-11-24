const Koa = require('koa');
// const IndexMiddleware = require('./middleware/index');
const controllers = require('./controllers/index');
const error = require('koa-error');
const koalogger = require('koa-logger');
const log4js = require('log4js');
const koaerror = require('koa-error');
const render = require('koa-swig');
const co = require('co');

const app = new Koa();

log4js.configure({
    appenders: { cheese: { type: 'file', filename: __dirname + '/../logs/cheese.log' } },
    categories: { default: { appenders: ['cheese'], level: 'error' } }
});
const logger = log4js.getLogger('cheese');

app.use(koaerror({
    template: __dirname + '/views/error.html'
}));

app.use(koalogger());

app.context.render = co.wrap(render({
    root: __dirname + '/views',
    writeBody: false
}));

controllers.init(app);

app.on('error', async function (err, ctx) {
    logger.level = 'error';
    logger.error(err);
});
app.listen(3000);
console.log('server is running');