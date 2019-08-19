module.exports = async (ctx, next) => {
  try {
    await next();
  } catch (e) {
    ctx.body = await ctx.render('500.html');
    console.log(e);
  }
};
