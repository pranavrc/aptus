define(['jquery',
        'underscore',
        'backbone',
        'backbone.localStorage'
], function ($, _, Backbone, LocalStorage) {
    var Course = Backbone.Model.extend({
        defaults: {
            id: null,
            name: null,
            description: null,
            rating: null,
            reviews: []
        },
        localStorage: new LocalStorage('aptus-courses')
    });

    return Course;
});
