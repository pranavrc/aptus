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
            this.$el.html(this.template({
                course: this.courses.get(this.courseid).toJSON(),
                challenges: this.challenges.where({courseid: this.courseid})
            }));
            return this;
        }
    });

    return CourseView;
});
