const BookModel = require('../model/Book');
const bookModel = new BookModel();

class BookController {
  async index(ctx) {
    const data = await bookModel.all();
    ctx.body = await ctx.render('book', data);
  }
}

module.exports = BookController;
