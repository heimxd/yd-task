<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>{% block title %}{% endblock %}</title>
    <link rel="stylesheet" href="/css/layout.css">
    {% block head %}{% endblock %}
  </head>
  <body>
    <div class="app-container">
      {% include "./aside.swig" %}
      <div class="layout-container">
        {% include "./header.swig" %}
        <div class="app-main">
          {% block content %}{% endblock %}
        </div>
        {% include "./footer.swig" %}
      </div>
    </div>
  </body>
</html>
