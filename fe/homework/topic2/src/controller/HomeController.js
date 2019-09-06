class HomeController {
  async index(ctx) {
    ctx.body = await ctx.render('home', {
      route: 'home',
    });
  }
}

module.exports = HomeController;
