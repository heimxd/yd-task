'use strict';
const supertest = require('supertest');
const app = require('../../build/server.js');
const request = supertest(app.listen(8001));

describe('【测试路由】', function () {
    describe('测试 /index/getdata', function () {
        it('测试data.msg为success', function (done) {
            request.get('/index/getdata')
                .expect(200)
                .end(function (err, res) {
                    if (res.body.data.msg == "success") {
                        done();
                    } else {
                        done(err)
                    }
                });
        });
    });
});