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
    vm.init = function() {
        view.icheck();
    }

    vm.init();//初始化

});
