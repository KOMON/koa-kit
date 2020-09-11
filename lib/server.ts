import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as bodyParser from 'koa-bodyparser';

const app = new Koa();
const router = new Router();


router.get(['/hello', '/hello/:hi'], (ctx: Koa.Context) => {
    if (typeof ctx.params.hi === 'string') {
        ctx.body = `Hello, ${ctx.params.hi}`
    } else {
        ctx.body = 'Hello, World!';
    }
    
    ctx.status = 200;
});

router.post('/hello', (ctx: Koa.Context) => {
    if (typeof ctx.request.body.hi === 'string') {
        ctx.body = `Hello, ${ctx.request.body.hi}`;
    } else {
        ctx.body = 'Hello, World!';
    }
    
    ctx.status = 200;
})

app.use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(3000);
