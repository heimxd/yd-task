import index from './indexController';
import home from './homeController';

export default function (router) {
    router.get('/', function (ctx, next) {
        // ctx.router available
        ctx.body = 'hello23'
    });
    router.get('/index', index.index());
    router.get('/index/getdata', index.getData());
    router.get('/home', home.index());
    router.get('/error', async function (ctx, next) {
        console.log(a);
        ctx.body = '123'
    });
}
