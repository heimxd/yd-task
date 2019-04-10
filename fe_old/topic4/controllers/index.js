const rp = require('request-promise');
const index = function () {
    return async (ctx, next) => {
        if (ctx.request.header['x-pjax']) {
            ctx.body = '<x-thumb></x-thumb>';
        } else {
            ctx.body = await ctx.render('index/thumb.html');
        }
    }
}
const update = function () {
    return async (ctx, next) => {
        ctx.body = await new Promise((resolve, reject) => {
            rp('http://localhost/ydtask/praise.php')
                .then(function (data) {
                    resolve(data)
                }).catch(function (err) {
                    reject('error')
                })
        });
    }
}
const star = function () {
    return async (ctx, next) => {
        if(ctx.request.header['x-pjax']){
            ctx.body = '<x-star></x-star>';
        } else{
            ctx.body = await ctx.render('star/star.html');
        }
    }
}
const adv =function(){
    return async(ctx,next)=>{
        ctx.body = '<div style="color:red;">这是广告</div>'
    }
}
module.exports = {
    index,
    update,
    star,
    adv
}