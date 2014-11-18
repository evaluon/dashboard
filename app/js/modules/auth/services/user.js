'use strict';

angular.module('evaluon.auth').factory(
    'User', function(api, headers, $http){

        return {

            getUser: function(tokenType, token){

                return $http({
                    method: 'get',
                    url: api.user,
                    headers: {
                        Authorization: headers.authorization(tokenType, token)
                    }
                }).then(function(data){
                    return data.data.data;
                });

            },

            createUser: function(options){

                var user = Auth.userLogged,
                    tokenType = user.token_type,
                    token = user.access_token;

                return $http({
                    method: 'post',
                    url: api.user,
                    headers: {
                        Authorization: headers.authorization(tokenType, token),
                        'Content-Type': headers.json
                    },
                    data: options
                }).then(function(data){
                    return data.data.data;
                });

            }

        };

    }
);
