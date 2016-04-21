"use strict";

define(['jquery',
        'underscore',
        'backbone',
        'text!templates/course.html',
        'models/course',
        'models/challenge',
        'collections/courses',
        'collections/challenges'
], function ($, _, Backbone, Template, Course, Challenge, Courses, Challenges) {
    var CourseView = Backbone.View.extend({
        el: '#main-container',
        template: _.template(Template),

        initialize: function (options) {
            _.bindAll(this, 'render');
            this.courseid = options.id;

            var self = this;

            this.challenges = new Challenges;
            this.courses = new Courses;

            this.courses.fetch({
                success: function () {
                    self.challenges.fetch({
                        success: function () {
                            self.render();
                        }
                    });
                }
            });
        },

        render: function () {
            var tiered = [];
            var challenges = this.challenges.where({courseid: this.courseid});

            var counter = 1;
            while (true) {
                var tieredChallenges = _.filter(challenges, function (challenge) {
                    return challenge.get('tier') == counter;
                });

                if (tieredChallenges.length > 0) {
                    tiered.push(tieredChallenges);
                    counter++;
                } else {
                    break;
                }
            }
            this.$el.html(this.template({
                course: this.courses.get(this.courseid).toJSON(),
                challenges: tiered
            }));
            return this;
        }
    });

    return CourseView;
});
