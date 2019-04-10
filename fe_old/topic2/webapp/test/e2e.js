const { Builder, By, Key, until } = require('selenium-webdriver');

let driver = new Builder()
    .forBrowser('firefox')
    .build();

driver.get('http://localhost:3000/index/index');
var button = driver.wait(until.elementLocated(By.className('praise-thumb')), 5000);
button.click();
driver.quit();