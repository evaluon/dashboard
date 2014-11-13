'use strict';

var apiRouter = {

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

angular.module('evaluon')
.constant(
    'api', {
        token: apiRouter.route('auth/token'),
        user: apiRouter.route('user')
    }
).constant(
    'access', {
        client: {
            grant_type: 'client_credentials',
            client_id: 'administrator',
            client_secret: 'kv0Ls8xoIFPdE2GXMK5fodQsAEBV5GzzINZOA0NX99E=',
        },
        tokens: {
            client: 'dlav4218f',
            user: 'ial83lcv'
        }
    }
);
