"use strict";

define(['jquery',
        'underscore',
        'backbone',
        'text!templates/challenge.html',
        'models/course',
        'models/challenge',
        'collections/courses',
        'collections/challenges'
], function ($, _, Backbone, Template, Course, Challenge, Courses, Challenges) {
    var ChallengeView = Backbone.View.extend({
        el: '#main-container',
        template: _.template(Template),

        initialize: function (options) {
            _.bindAll(this, 'render');
            this.chid = options.chid;

            var self = this;
            this.challenge = new Challenge({id: this.chid});

            this.challenge.fetch({
                success: self.render
            });
        },

        render: function () {
            this.$el.html(this.template({
                challenge: this.challenge.toJSON()
            }));
            return this;
        }
    });

    return ChallengeView;
});
