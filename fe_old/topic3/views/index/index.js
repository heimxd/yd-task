module.exports = function (temeplateParams) {
    const cssList = ['thumb'];
    const webAssetsHelp = require('../webAssetsHelp.js')(temeplateParams, cssList);
    const html = `{% extends '../layout.html' %}
                {% block head %}
                    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
                    ${webAssetsHelp.styles}
                {% endblock %}
                {% block title %}hahhah{% endblock %}
                
                {% block content %}
                    <x-thumb></x-thumb>
                    ${webAssetsHelp.scripts}
                {% endblock %}`;
    return html;
}