module.exports = function (temeplateParams) {
    const cssList = ['thumb'];
    const webAssetsHelp = require('../webAssetsHelp.js')(temeplateParams, cssList);
    const html = `{% extends '../layout.html' %}
                {% block head %}
                    <script src="https://cdn.bootcss.com/axios/0.17.1/axios.js"></script>
                    ${webAssetsHelp.styles}
                {% endblock %}
                {% block title %}hahhah{% endblock %}
                
                {% block content %}
                    <x-thumb></x-thumb>
                    <script>
                        (function () {
                            var flag = false;
                            var scriptsshow = [${webAssetsHelp.scriptsshow}];
                            for (let i = 0; i < scriptsshow.length; i++) {
                                let a = scriptsshow[i];
                                if (localStorage.getItem(a)) {
                                    $("<scr" + "ipt>" + localStorage.getItem(a) + "</scr" + "ipt>").attr({ type: "text/javascript", id: i }).appendTo($("head").remove("#" + i));
                                } else {
                                    localStorage.clear();
                                    flag = true;
                                    for (let q = 0; q < scriptsshow.length; q++) {
                                        let b = scriptsshow[q];
                                        axios.get(b).then(function (data) {
                                            localStorage.setItem(b, data.data);
                                        })
                                    } break;
                                }
                            }
                            if (flag) {
                                LazyLoad.js(scriptsshow, function () { });
                            }
                        })()
                    </script>
                {% endblock %}`;
    return html;
}