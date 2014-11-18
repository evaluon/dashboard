'use strict';

angular.module('evaluon.evaluator').factory(
    'Question', function(Auth, api, headers, $http){

        var user = Auth.userLogged,
            tokenType = user.token_type,
            token = user.access_token;

    }
);
