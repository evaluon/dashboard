'use strict';

var apiRouter = {

    images: function(container, path){
        return 'http://cdn.boolinc.co/{0}/{1}'.format(container, path);
    },
    url: {
        protocol: 'http',
        host: 'evaluon.boolinc.co'
    },
    route: function(path){
        var url = this.url;
        return '{0}://{1}/{2}'.format(url.protocol, url.host, path);
    },
    id: function(url, id){
        return '{0}/{1}'.format(url, id)
    }

};

angular.module('evaluon').constant(
    'api', {

        // Authorization Module
        token: apiRouter.route('auth/token'),

        // Users Module
        user: apiRouter.route('user'),

        // Institutions Module
        institution: apiRouter.route('institution'),

        // Evaluators Module
        evaluator: apiRouter.route('evaluator'),
        evaluatorGroup: apiRouter.route('evaluator/group'),

        // Evaluees Module
        evaluee: apiRouter.route('evaluee'),
        evalueeDescription: apiRouter.route('evaluee/description')

    }
).constant(
    'images', {
        evaluon: function(path) { return apiRouter.images('evaluon', path); }
    }
);
