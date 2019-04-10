function MyPlugin(options) {
    // Configure your plugin with options...
}

function formatHtml(html, assets) {

    let _scripts = "";
    let _styles = "";
    for (let i = 0; i < assets.js.length; i++) {
        _scripts += "<script type='text/javascript'  src='" + assets.js[i] + "'></script>";
    }
    for (let j = 0; j < assets.css.length; j++) {
        _styles += '<link rel="stylesheet" type="text/css" href="' + assets.css[j] + '"/>';
    }
    html = html.replace('{% block scripts %}{% endblock %}', `{% block scripts %}${_scripts}{% endblock %}`)
    html = html.replace('{% block styles %}{% endblock %}', `{% block styles %}${_styles}{% endblock %}`)
    return html
}


MyPlugin.prototype.apply = function (compiler) {
    // ...
    compiler.plugin('compilation', function (compilation) {
        console.log('The compiler is starting a new compilation...');

        compilation.plugin('html-webpack-plugin-before-html-processing', function (htmlPluginData, callback) {
            htmlPluginData.html = formatHtml(htmlPluginData.html, htmlPluginData.assets);
            callback(null, htmlPluginData);
        });
    });

};

module.exports = MyPlugin;
