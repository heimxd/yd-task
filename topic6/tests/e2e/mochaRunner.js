const Mocha = require('mocha');
const path = require('path');

const mocha = new Mocha({
    reporter: 'mochawesome',
    reporterOptions: {
        reportDir: __dirname + '/../../reports/e2e'
    }
});
mocha.addFile(
    __dirname + '/routeSpec.js'
);
mocha.run(function () {
    console.log('All done');
    process.exit();
});
