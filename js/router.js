define(['jquery',
        'underscore',
        'backbone',
        'app'
],function($, _, Backbone, App) {
    var Router = Backbone.Router.extend({
        initialize: function () {
            var app = new App();
        },

        routes: {
           "": "home",
           "courses": "courses",
           "course/:cid": "course",
           "course/:cid/challenge/:chid": "challenge",
           "complete/:chid": "complete"
        },

        home: function () {
        },

        courses: function () {
        },

        course: function (cid) {
        },

        challenge: function (cid, chid) {
        },

        complete: function (chid) {
        }
    });

    return Router;
});
