define(['jquery',
        'underscore',
        'backbone',
        'backbone.localStorage'
], function ($, _, Backbone, LocalStorage) {
    var User = Backbone.Model.extend({
        defaults: {
            id: 0,
            name: null,
            age: null,
            location: null,
            occupation: null,
            about: null,
            interests: [],
            credits: 0
        },
        localStorage: new LocalStorage('aptus-user')
    });

    return User;
});
