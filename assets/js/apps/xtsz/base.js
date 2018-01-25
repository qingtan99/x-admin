/**
 * Created by tanqing on 2018/1/25.
 */
require.config(requireConfig);
require(['jquery', 'bootstrap','content', 'module', 'hotkeys','simditor'], function ($) {
    'use strict';
    var vm = {};
        var editor = new Simditor({
            textarea: $('#editor'),
            defaultImage: 'img/a9.jpg',
            upload: false,
            toolbar: [
                'title',
                'bold',
                'italic',
                'underline',
                'strikethrough',
                'link'
            ]
        });

    vm.init();
});
