define(['jquery',
        'underscore',
        'backbone',
],function($, _, Backbone) {
    var Router = Backbone.Router.extend({
        initialize: function () {
            Backbone.history.start();
        },

        routes: {
           "": "home",
           "course/:cid": "course",
           "challenge/:chid": "challenge",
           "complete/:chid": "complete",
           "profile": "profile",
           "populate": "populate"
        },

        home: function () {
            require(['js/app'], function (App) {
                var app = new App();
            });
        },

        course: function (cid) {
            require(['js/course'], function (CourseView) {
                var courseView = new CourseView({id: parseInt(cid, 10)});
            });
        },

        challenge: function (chid) {
            require(['js/challenge'], function (ChallengeView) {
                var challengeView = new ChallengeView({
                    chid: parseInt(chid, 10)
                });
            });
        },

        profile: function () {
            require(['js/profile'], function (ProfileView) {
                var profileView = new ProfileView();
            });
        },

        complete: function (chid) {
        },

        populate: function () {
            require([
                    'collections/courses',
                    'collections/challenges',
                    'models/course',
                    'models/challenge',
                    'models/user',
                    'res/content'
                    ], function (Courses, Challenges, Course, Challenge, User, Content) {
                        window.localStorage.clear();
                        var challenges = new Challenges;
                        var courses = new Courses;

                        for (var challenge in Content['challenges']) {
                            var newChallenge = new Challenge(Content['challenges'][challenge]);
                            challenges.add(newChallenge);
                            newChallenge.save();
                        }

                        for (var course in Content['courses']) {
                            var newCourse = new Course(Content['courses'][course]);
                            courses.add(newCourse);
                            newCourse.save();
                        }

                        var newUser = new User(Content['user']);
                        newUser.save();
                    });
        }
    });

    return Router;
});
