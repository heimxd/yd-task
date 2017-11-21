const Koa = require('koa');
const router = require('koa-simple-router');
const render = require('koa-swig');
const controller = require('./controllers/init');
const errorHandler = require('./middleware/error');
const devConfig = require('./config/development');
const koaLogger = require('koa-logger');
const co = require('co');
const log4js = require('log4js');
const serve = require('koa-static');

const app = new Koa();

log4js.configure({
    appenders: { error: { type: 'file', filename: devConfig.logs.path } },
    categories: { default: { appenders: ['error'], level: 'error' } }
});
const logger = log4js.getLogger('error');


app.context.render = co.wrap(render({
    // ...your setting 
    root: devConfig.templete.path,
    cache: 'memory', // disable, set to false 
    ext: 'html',
    writeBody: false
}));

errorHandler.error(app, logger);
controller.init(app, router);
app.use(koaLogger());
app.use(serve(__dirname + '/public'));

app.listen(devConfig.app.port);
console.log('server is running');

