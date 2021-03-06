"use strict";

define(['jquery',
        'underscore',
        'backbone',
        'backbone.localStorage',
        'bootstrap',
        'text!templates/home.html',
        'models/course',
        'collections/courses',
        'models/user'
], function ($, _, Backbone, LocalStorage, Bootstrap, Template, Course, Courses, User) {
    var App = Backbone.View.extend({
        el: '#main-container',
        template: _.template(Template),

        events: {
            'submit form': 'search'
        },

        initialize: function () {
            _.bindAll(this, 'render', 'search');
            this.user = new User({id: 0});

            var self = this;
            this.collection = new Courses;
            this.collection.fetch({
                success: function () {
                    self.user.fetch({
                        success: function () {
                            self.render();
                        }
                    });
                }
            });
        },

        render: function () {
            this.$el.html(this.template({
                courses: this.collection.toJSON(),
                user: this.user
            }));
            $('.navbar-tab-profile').removeClass('active');
            $('.navbar-tab-home').addClass('active');
            return this;
        },

        search: function (e) {
            e.preventDefault();
        },
    });

    return App;
});
