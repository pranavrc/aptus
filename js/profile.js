"use strict";

define(['jquery',
        'underscore',
        'backbone',
        'text!templates/profile.html',
        'models/user'
], function ($, _, Backbone, Template, User) {
    var ProfileView = Backbone.View.extend({
        el: '#main-container',
        template: _.template(Template),

        initialize: function () {
            _.bindAll(this, 'render');

            var self = this;
            this.user = new User({id: 0});

            this.user.fetch({
                success: self.render
            });
        },

        render: function () {
            this.$el.html(this.template({
                user: this.user.toJSON()
            }));
            $('.navbar-tab-home').removeClass('active');
            $('.navbar-tab-profile').addClass('active');
            return this;
        }
    });

    return ProfileView;
});
