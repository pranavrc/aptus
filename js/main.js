require.config({
    baseUrl: '',
    paths: {
        'jquery': 'bower_components/jquery/dist/jquery',
        'jquery.tagsinput': 'bower_components/jquery.tagsinput/src/jquery.tagsinput',
        'backbone': 'bower_components/backbone/backbone',
        'underscore': 'bower_components/underscore/underscore',
        'backbone.localStorage': 'bower_components/backbone.localstorage/backbone.localStorage',
        'bootstrap' : 'bower_components/bootstrap/dist/js/bootstrap.min',
        'text': 'bower_components/text/text'
    },

    shim: {
        'jquery.tagsinput': ['jquery'],
        'backbone.localStorage': ['backbone', 'underscore'],
        'bootstrap': ['jquery']
    }
});

require(['js/router','backbone'], function (Router, Backbone) {
    var router = new Router();

    Backbone.history.start();
});
