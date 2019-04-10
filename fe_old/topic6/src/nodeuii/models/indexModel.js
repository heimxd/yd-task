import request from '../libs/request';

export default class {
    constructor() {

    }
    getIndexData() {
        return new Promise(function (resolve, reject) {
            resolve({
                err: 0,
                msg: 'success',
                data: {
                    info: '成功的信息'
                }
            })
        })
    }
    getAsyncData() {
        return request('url', { a: 1, b: 2 });
    }
}