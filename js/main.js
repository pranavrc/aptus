require.config({
    paths: {
        'jquery': '../bower_components/jquery/dist/jquery',
        'jquery.tagsinput': '../bower_components/jquery.tagsinput/src/jquery.tagsinput',
        'backbone': '../bower_components/backbone/backbone',
        'underscore': '../bower_components/underscore/underscore',
        'backbone.localStorage': '../bower_components/backbone.localstorage/backbone.localStorage',
        'bootstrap' : '../bower_components/bootstrap/dist/js/bootstrap.min'
    },

    shim: {
        'jquery.tagsinput': ['jquery'],
        'backbone.localStorage': ['backbone', 'underscore'],
        'bootstrap': ['jquery']
    }
});

require(['app'], function (App) {
    var app = new App;
});
