define(['jquery',
        'underscore',
        'backbone',
        'backbone.localStorage'
], function ($, _, Backbone, LocalStorage) {
    var User = Backbone.Model.extend({
        defaults: {
            id: null,
            name: null,
            about: null,
            interests: [],
            credits: 0
        },
        localStorage: new LocalStorage('aptus-user')
    });

    return User;
});
