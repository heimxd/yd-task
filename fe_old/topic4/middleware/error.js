
const errorHandler = {
    error: function (app, logger) {
        if (!app) {
            throw new Error('app is a required parameter');
        }
        app.use(async (ctx, next) => {
            try {
                await next()
            } catch (err) {
                if (logger) {
                    logger.level = 'error';
                    logger.error(err);
                }
                ctx.status = err.status || 500
                ctx.body = await ctx.render('500.html')
            }
        });
        app.use(async (ctx, next) => {
            await next();
            if (404 != ctx.status) {
                return
            }
            if (logger) {
                logger.level = 'warn';
                logger.warn(`${ctx.method} "${ctx.url}" 404`);
            }
            ctx.status = 404;
            ctx.body = await ctx.render('404.html')
        });
    }
}

module.exports = errorHandler;