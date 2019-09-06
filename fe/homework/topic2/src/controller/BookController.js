const moment = require('moment');
const BookModel = require('../model/Book');
const bookModel = new BookModel();

class BookController {
  index = async ctx => {
    const { data } = await bookModel.list();
    ctx.body = await ctx.render('book', {
      data: data,
      route: 'book',
    });
  };

  create = async ctx => {
    const params = {
      ...ctx.request.body,
      create_date: moment().format('YYYY-MM-DD HH:mm:ss'),
    };
    const { code, data } = await bookModel.create(params);
    ctx.body = data;
  };

  delete = async ctx => {
    const { code, data } = await bookModel.delete(ctx.request.body);
    ctx.body = data;
  };

  update = async ctx => {
    const { code, data } = await bookModel.updaate(ctx.request.body);
    ctx.body = data;
  };
}

module.exports = BookController;
