/**
 * Created by tanqing on 2018/1/25.
 */
require.config(requireConfig);
require(['jquery', 'bootstrap', 'content', 'iCheck', 'layer'], function ($) {
    'use strict';
    var vm = {};

    var clickEvent = function() {
        $("body")
            .on("click", ".edit-btn", view.edit)
            .on("click", ".dele-btn", view.dele)
    }

    var view = {
        icheck: function() {
            $('.i-checks').iCheck({
                checkboxClass: 'icheckbox_square-green',
                radioClass: 'iradio_square-green',
            });
        },

        //编辑
        edit: function(e) {
            layer.open({
                type: 2,
                area: ['700px', '450px'],
                fixed: false, //不固定
                scrollbar: false,   //滚动条锁定
                maxmin: true,
                content: '123'
            });
        },

        //删除
        dele: function(e) {
            layer.confirm('删除后将不可恢复！确认删除该管理员？', {
                title: "提示信息",
                btn: ['是的','取消'] //按钮
            }, function(){
                layer.msg('已删除', {icon: 1});
            });
        }
    };
    vm.init = function() {
        clickEvent();
        view.icheck();
    }

    vm.init();//初始化

});
