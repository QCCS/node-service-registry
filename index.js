/**
 * Created by zhouli on 18/11/29
 */
'use strict';
const Koa = require('koa');
const Router = require('koa-router');
const app1 = new Koa();
const app2 = new Koa();
const app3 = new Koa();
const app4 = new Koa();
const router1 = new Router();
const router2 = new Router();
const router3 = new Router();
const router4 = new Router();
router1.get('/test', (ctx, next) => {
    ctx.body = 'Hello test';
    next()
});
router1.get('/test1', (ctx, next) => {
    ctx.body = 'Hello test1';
    next()
});
app1.use(router1.routes())
    .use(router1.allowedMethods());
app1.listen(3001);


router2.get('/test2', (ctx, next) => {
    ctx.body = 'Hello test2';
    next()
});
app2.use(router2.routes())
    .use(router2.allowedMethods());
app2.listen(3002);


router3.get('/test3', (ctx, next) => {
    ctx.body = 'Hello test3';
    next()
});
app3.use(router3.routes())
    .use(router3.allowedMethods());
app3.listen(3003);


// router4.get('/test4', (ctx, next) => {
//     ctx.body = 'Hello test4';
//     next()
// });
// app4.use(router4.routes())
//     .use(router4.allowedMethods());
// app4.listen(3004);