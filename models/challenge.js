define(['jquery',
        'underscore',
        'backbone',
        'backbone.localStorage'
], function ($, _, Backbone, LocalStorage) {
    var Challenge = Backbone.Model.extend({
        defaults: {
            name: '',
            completed: false,
            description: '',
            tier: null,
            credits: null,
            courseid: null
        },
        localStorage: new LocalStorage('aptus-challenges')
    });

    return Challenge;
});
