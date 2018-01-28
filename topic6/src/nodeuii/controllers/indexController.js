import IndexModel from '../models/indexModel';

export default {
    index() {
        return async function (ctx, next) {
            ctx.body = await ctx.render('index/index.html');
        }
    },
    getData() {
        return async function (ctx, next) {
            const indexModel = new IndexModel();
            const data = await indexModel.getIndexData();
            ctx.body = data;
        }
    }
}