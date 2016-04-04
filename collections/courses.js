define(['jquery',
        'underscore',
        'backbone',
        'backbone.localStorage',
        'models/course'
], function ($, _, Backbone, LocalStorage, Course) {
    var Course = Backbone.Model.extend({
        model: Course,
        localStorage: new LocalStorage('aptus-courses')
    });

    return Course;
});
