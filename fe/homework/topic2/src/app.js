const Koa = require('koa');
const co = require('co');
const render = require('koa-swig');
const serve = require('koa-static');
const KoaBody = require('koa-body');
const router = require('./router');
const config = require('../config');
const errorMiddleware = require('./middleware/error');

const app = new Koa();

app.context.render = co.wrap(
  render({
    root: config.tpl_dir,
    autoescape: true,
    cache: 'memory', // disable, set to false
    ext: 'swig',
    writeBody: false,
  }),
);
app.use(KoaBody());
app.use(serve(__dirname + '/public'));
app.use(errorMiddleware);
app.use(router.routes()).use(router.allowedMethods(['get', 'post', 'options']));
app.listen(3000);
console.log('listening on port 3000');
