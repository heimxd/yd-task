import axios from 'axios';
import querystring from 'querystring';

export default async function (url, data) {
    return new Promise(function (resolve, reject) {
        axios({
            url: url,
            method: 'POST',
            data: querystring.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (data) {

            try {
                data = JSON.parse(data);
                if (data) {
                    resolve({
                        err: 0,
                        result: data
                    })
                }

            } catch (err) {
                reject({
                    err: 1,
                    result: err
                })
            }

        }).catch(function (err) {
            reject({
                err: 1,
                result: err
            })
        })
    })
}