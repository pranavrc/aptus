define(['jquery',
        'underscore',
        'backbone',
        'js/app',
        'models/challenge',
        'models/course',
        'models/user',
        'collections/challenges',
        'collections/courses',
        'res/content'
],function($, _, Backbone, App, Challenge, Course, User, Challenges, Courses, Content) {
    var Router = Backbone.Router.extend({
        initialize: function () {
            Backbone.history.start({pushState: true});
        },

        routes: {
           "": "home",
           "courses": "courses",
           "course/:cid": "course",
           "course/:cid/challenge/:chid": "challenge",
           "complete/:chid": "complete",
           "populate": "populate"
        },

        home: function () {
            var app = new App();
        },

        courses: function () {
        },

        course: function (cid) {
        },

        challenge: function (cid, chid) {
        },

        complete: function (chid) {
        },

        populate: function () {
        }
    });

    return Router;
});
