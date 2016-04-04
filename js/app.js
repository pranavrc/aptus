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
            this.render();
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        },

        search: function (e) {
            e.preventDefault();
        },
    });

    return App;
});
