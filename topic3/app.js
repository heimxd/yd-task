const Koa = require('koa');

const app = new Koa();

app.use((ctx) => {
    ctx.body = 'hahahah2'
});

app.listen(3000);

console.log('server is running');