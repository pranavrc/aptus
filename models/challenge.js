define(['jquery',
        'underscore',
        'backbone',
        'backbone.localStorage'
], function ($, _, Backbone, LocalStorage) {
    var Challenge = Backbone.Model.extend({
        defaults: {
            id: null,
            name: null,
            completed: false,
            description: null,
            tier: null,
            credits: null,
            courseid: null
        },
        localStorage: new LocalStorage('aptus-challenge')
    });

    return Challenge;
});
