# chishenme

##目录说明

### src
项目源代码

### test
测试代码

### reports
测试生成报表

### .bin
命令文件

###node_modules
npm安装模块

##所用的库

###编译
* webpack
* babel-cli
* babel-preset-es2015

###测试
1. 单元测试，覆盖率测试。配置文件：karma.conf.js ；测试文件：./test/unit/index.spec.js
 * karma 单元测试工具
 * karma-cli（全局装的） karma客户端，装完能执行karma 命令
 * karma-jasmine phantomjs karma-phantomjs-launcher (全局装karma-cli时候装的)
 * jasmine BDD测试框架（先写代码后测试）
 * jasmine-core
 * karma-coverage-istanbul-reporter 测试覆盖率&生成报表
 * ===下面的为了支持es6====
 * karma-webpack
 * karma-babel-preprocessor

2. 页面还原度测试（好像叫这个）配置文件：nightwatch.json
 * backstop（全局）

3. 功能测试（好像叫这个）配置文件：nightwatch.json ；测试文件：./test/unit/e2e/nightwach.js
 * nightwatch（我理解的：用selenium-server启动chromedriver，打开浏览器）
 * selenium-server
 * chromedriver

4. 性能测试 测试文件：./test/performance/benchmark.js
 * benchmark

##第二周
搭建node。
###目录说明
* config
pm2.json

* controllers
路由 koa-simple-router

* middleware
logger中间件，替换为koa-logger

* views
swig模板文件

* app.js
启动文件,有koa,koa-simple-router,koa-swig,koa-logger,log4js(写在根目录下的logs),koa-error


