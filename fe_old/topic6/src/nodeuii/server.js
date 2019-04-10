import Koa from 'koa';
import controller from './controllers/init'
import Router from 'koa-router';
import logger from 'koa-logger';
import render from 'koa-swig';
import co from 'co';
import serve from 'koa-static';
import errorHandler from './middlewares/error';
import log4js from 'log4js';
import path from 'path';
import config from './config/config';

const app = new Koa();
const router = new Router();

log4js.configure({
    appenders: { error: { type: 'file', filename: config.logRoot } },
    categories: { default: { appenders: ['error'], level: 'error' } }
});
const log4jsLogger = log4js.getLogger('error');

app.context.render = co.wrap(render({
    root: config.swigRoot,
    cache: 'memory',
    ext: 'html',
    writeBody: false
}));

errorHandler.error(app, log4jsLogger);

app.use(logger());

controller(router);
app.use(router.routes())
    .use(router.allowedMethods());

app.use(serve(__dirname));
module.exports = app;

