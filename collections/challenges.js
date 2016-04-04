define(['jquery',
        'underscore',
        'backbone',
        'backbone.localStorage',
        'models/challenge'
], function ($, _, Backbone, LocalStorage, Challenge) {
    var Challenge = Backbone.Collection.extend({
        model: Challenge,
        localStorage: new LocalStorage('aptus-challenge')
    });

    return Challenge;
});
