{% extends '../component/layout.swig' %} {% block title %} 图书管理 {% endblock
%} {% block content %}
<div>
  <button
    type="button"
    class="btn btn-primary"
    data-toggle="modal"
    data-target="#myModal"
  >
    添加
  </button>
  <table class="table table-bordered table-hover">
    <tr>
      <td></td>
      <td>书名</td>
      <td>作者</td>
      <td>价钱</td>
      <td>创建时间</td>
      <td>操作</td>
    </tr>
    {% for index,item in data %}
    <tr>
      <td>{{ index + 1 }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.author }}</td>
      <td>{{ item.price }}</td>
      <td>{{ item.create_date }}</td>
      <td>
        <button type="button" class="btn btn-info">修改</button>
        <button type="button" class="btn btn-warning">删除</button>
      </td>
    </tr>
    {% endfor %}
  </table>

  <div id="myModal" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 class="modal-title">添加</h4>
        </div>
        <div class="modal-body">
          <form class="form-horizontal">
            <div class="form-group">
              <label for="input-name" class="col-sm-3 control-label"
                >书名</label
              >
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  id="input-name"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="input-author" class="col-sm-3 control-label"
                >作者</label
              >
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  id="input-author"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="input-price" class="col-sm-3 control-label"
                >价钱</label
              >
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  id="input-price"
                />
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">
            关闭
          </button>
          <button id="btn-create-confirm" type="button" class="btn btn-primary">
            保存
          </button>
        </div>
      </div>
      <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
  </div>
  <!-- /.modal -->
</div>
{% endblock %} {% block script %}
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script type="module" src="/js/book.js"></script>
{% endblock %}
