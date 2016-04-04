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
            bio: null,
            location: null,
            occupation: null,
            interests: [],
            credits: 0
        },
        localStorage: new LocalStorage('aptus-user')
    });

    return User;
});
