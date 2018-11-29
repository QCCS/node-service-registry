/**
 * Created by zhouli on 18/11/29
 */

'use strict';
const Koa = require('koa');
const Router = require('koa-router');
const app1 = new Koa();
const router1 = new Router();
const request = require('request');

//服务中心
const servierMap = [
    {
        name: "s1",
        ip: "127.0.0.1",
        port: 3001,
        protocol: "http",
        enable: true
    },
    {
        name: "s2",
        ip: "127.0.0.1",
        port: 3002,
        protocol: "http"
    },
    {
        name: "s3",
        ip: "127.0.0.1",
        port: 3003,
        protocol: "http"
    },
    {
        name: "s4",
        ip: "127.0.0.1",
        port: 3004,
        protocol: "http"
    }
];


//轮询服务是否正常
setInterval(() => {
    servierMap.map(item => {
        request(item.protocol + '://' + item.ip + ":" + item.port, function (error, response, body) {
            if (!error) {
                item.enable = true;
            } else {
                item.enable = false;
            }
        });
    });
}, 3000);


router1.get('/status', (ctx, next) => {
    let u = [];
    servierMap.map(item => {
        if (item.enable) {
            u.push(item);
        }
    });
    ctx.body = {"可用服务列表：": u};
    next()
});
app1.use(router1.routes())
    .use(router1.allowedMethods());
app1.listen(3000);