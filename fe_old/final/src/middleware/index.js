const loger = function (format) {
    format = format || ':method ":url" :ms'
    return async function (ctx, next) {
        const startTime = Date.now();
        await next();
        const ms = Date.now() - startTime;
        const str = format
            .replace(':method', ctx.request.method)
            .replace(':url', ctx.request.url)
            .replace(':ms', `-${ms}ms`);
        console.log(str);
    }
}

module.exports = {
    loger
}