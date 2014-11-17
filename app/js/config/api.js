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

angular.module('evaluon').constant('api', {

    token: apiRouter.route('auth/token'),
    user: apiRouter.route('user'),
    institution: apiRouter.route('institution'),
    evaluee: apiRouter.route('evaluee'),    

});
