module.exports = function (temeplateParams) {
    const cssList = ['thumb'];
    const webAssetsHelp = require('../webAssetsHelp.js')(temeplateParams, cssList);
    const html = `{% extends '../layout.html' %}
                {% block head %}
                    ${webAssetsHelp.styles}
                {% endblock %}
                {% block title %}hahhah{% endblock %}
                
                {% block content %}
                    <x-star></x-star>
                    ${webAssetsHelp.scripts}
                {% endblock %}`;
    return html;
}