'use strict';

var apiRouter = {

    images: function(container, path){
        return 'http://cdn.boolinc.co/{0}/{1}'.format(container, path);
    },
    url: {
        protocol: 'http',
        host: 'localhost:3004'
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

        token: apiRouter.route('auth/token'),
        user: apiRouter.route('user'),
        institution: apiRouter.route('institution'),
        evaluee: apiRouter.route('evaluee'),
        evaluator: apiRouter.route('evaluator'),
        evaluatorGroup: apiRouter.route('evaluator/group')

    }
).constant(
    'images', {
        evaluon: function(path) { return apiRouter.images('evaluon', path); }
    }
);
