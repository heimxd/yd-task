export default {
    index() {
        return async function (ctx, next) {
            ctx.body = await ctx.render('home/index.html');
        }
    },
    getData() {

    }
}