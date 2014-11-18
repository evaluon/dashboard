'use strict';

angular.module('evaluon.evaluator').controller(
    'Evaluator', function(Auth, api, headers, $http, localStorageService){

        var user = Auth.userLogged;

        return {

            evaluatorList: function(){

                return $http({
                    method: 'get',
                    url: api.evaluator,
                    headers: {
                        Authorization: headers.authorization(
                            user.token_type, user.access_token
                        )
                    }
                }).then(function(data){
                    return data.data.data;
                })

            }

        }

    }
);
