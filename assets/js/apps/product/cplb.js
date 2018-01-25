/**
 * Created by tanqing on 2018/1/25.
 */
require.config(requireConfig);
require(['jquery', 'bootstrap', 'iCheck', 'content'], function ($) {
    'use strict';
    var vm = {};

    var view = {
        icheck: function() {
            $('.i-checks').iCheck({
                checkboxClass: 'icheckbox_square-green',
                radioClass: 'iradio_square-green',
            });
        }
    };

    var eventBind = function() {
        $("body")
            .on('click','.dropdown-menu li a', function(e) {
                var t = $(this).text();
                $('#btnClass .btn-txt').text(t);
            })
    }
    vm.init = function() {
        eventBind();
        view.icheck();
    }

    vm.init();//初始化

});
