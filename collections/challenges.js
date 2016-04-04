define(['jquery',
        'underscore',
        'backbone',
        'backbone.localStorage',
        'models/challenge'
], function ($, _, Backbone, LocalStorage, Challenge) {
    var Challenge = Backbone.Model.extend({
        model: Challenge,
        localStorage: new LocalStorage('aptus-challenges')
    });

    return Challenge;
});
