// Karma configuration
// Generated on Sun Nov 05 2017 10:54:19 GMT+0800 (CST)
const path = require('path');

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      './src/index.js',
      './test/unit/index.spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './src/index.js': ['webpack', 'babel'],
      './test/unit/index.spec.js': ['webpack', 'babel']
    },

    webpack: {
      module: {
        rules: [
          // 用 Istanbul 只监测业务代码
          {
            test: /\.js$|\.jsx$/,
            use: {
              loader: 'istanbul-instrumenter-loader',
              options: { esModules: true }
            },
            enforce: 'post',
            include: path.resolve('src/')
          }
        ]
      }
    },

    babelPreprocessor: {
      options: {
        babelrc: true
      }
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage-istanbul'],

    coverageIstanbulReporter: {
      reports: ['html'],

      // base output directory. If you include %browser% in the path it will be replaced with the karma browser name
      dir: ('./reports/coverage'),

      // if using webpack and pre-loaders, work around webpack breaking the source path
      fixWebpackSourcePaths: true
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
