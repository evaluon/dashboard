'use strict';

angular.module('evaluon')
.constant('api', {

    url: {
        protocol: 'http',
        host: 'evaluon.boolinc.co'
    },
    router: function(path){
        var url = this.url;
        return '{0}://{1}/{2}'.format(url.protocol, url.host, path);
    },
    id: function(id){
        return '/'+id;
    },

    token: function(){
        return this.router('auth/token');
    }

})
.constant('access', {
    client: {
        grant_type: 'client_credentials',
        client_id: 'administrator',
        client_secret: 'kv0Ls8xoIFPdE2GXMK5fodQsAEBV5GzzINZOA0NX99E=',
    },
    tokens: {
        client: 'dlav4218f',
        user: 'ial83lcv'
    }
});
