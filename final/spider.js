const express = require('express');
const request = require('request');
const cheerio = require('cheerio');

const app = express();
app.get('*', function (req, res) {
    request('http://hotels.ctrip.com/hotel/shanghai2#ctm_ref=hod_hp_sb_lst', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.end(body);

            let result = '';
            if (body) {
                $ = cheerio.load(body);
                result = [];
                let imgs = $('img').each(function () {
                    result.push($(this).attr('src'))
                });
            }
            console.log(result);

        }
    });
});


app.listen(3000);
console.log('running');