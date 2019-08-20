const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const app = new express();

app.get('/', function(req, res) {
  request('https://item.jd.com/709846.html', function(error, response, body) {
    console.log(body);
    if (error) {
      return;
    }
    $ = cheerio.load(body)
    res.end(body);
  });
});

app.listen(3000);
