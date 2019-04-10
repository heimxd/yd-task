const path = require('path');
module.exports = {
    app: {
        port: 3000
    },
    templete: {
        path: path.join(__dirname, '../views')
    },
    logs: {
        path: path.join(__dirname, '../logs/error.log')
    }
}