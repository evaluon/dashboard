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

            }

        };

    }
);
