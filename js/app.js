"use strict";

define(['jquery',
        'underscore',
        'backbone',
        'jquery.tagsinput',
        'backbone.localStorage',
        'bootstrap'
], function ($, _, Backbone, TagsInput, LocalStorage) {
    var App = Backbone.View.extend({
        el: '.main-container',

        events: {
            'submit form': 'search'
        },

        initialize: function () {
        },

        search: function (e) {
            e.preventDefault();
        },
    });

    return App;
});
