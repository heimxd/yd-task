const Router = require('koa-router');
const router = new Router();
const HomeController = require('./controller/HomeController');
const BookController = require('./controller/BookController');

const homeController = new HomeController();
const bookController = new BookController();

router.get('/', async ctx => {
  ctx.redirect('/home');
});
router.get('/home', homeController.index);
router.get('/book', bookController.index);
router.post('/book/create', bookController.create);
router.post('/book/delete', bookController.delete);
router.post('/book/update', bookController.update);

router.get('/error', async ctx => {
  //渲染失败
  ctx.body = await ctx.render('home1');
});

router.get('*', async ctx => {
  ctx.body = await ctx.render('404.html');
});

module.exports = router;
