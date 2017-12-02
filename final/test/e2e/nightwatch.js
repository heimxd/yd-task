module.exports = {
    'Demo test': function (browser) {
        browser
        .url('https://www.tsingpu.com/m/login')
        .waitForElementVisible('body', 1000)
        .setValue('input[name=mobile]', '15764906198')
        .waitForElementVisible('span.send-sms', 1000)
        .click('span.send-sms')
        .pause(1000)
        // .end();
    
    }
};