class HomeController {
  async index(ctx) {
    ctx.body = await ctx.render('home');
  }
}

module.exports = HomeController;
