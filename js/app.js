"use strict";

define(['jquery',
        'underscore',
        'backbone',
        'jquery.tagsinput',
        'backbone.localStorage',
        'bootstrap',
        'text!templates/home.html',
        'models/course',
        'collections/courses'
], function ($, _, Backbone, TagsInput, LocalStorage, Bootstrap, Template, Course, Courses) {
    var App = Backbone.View.extend({
        el: '#main-container',
        template: _.template(Template),

        events: {
            'submit form': 'search'
        },

        initialize: function () {
            _.bindAll(this, 'render', 'search');

            var self = this;
            this.collection = new Courses;
            this.collection.fetch({
                success: self.render
            });
        },

        render: function () {
            this.$el.html(this.template({courses: this.collection.toJSON()}));
            return this;
        },

        search: function (e) {
            e.preventDefault();
        },
    });

    return App;
});
