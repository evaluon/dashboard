'use strict';

angular.module('evaluon.evaluator').factory(
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

            },

            addEvaluator: function(evaluator){

                return $http({
                    method: 'post',
                    url: api.evaluator,
                    headers: {
                        Authorization: headers.authorization(
                            user.token_type, user.access_token
                        ),
                        'Content-Type': headers.json
                    },
                    data: evaluator
                }).then(function(data){
                    return data.data.data;
                });

            }

        }

    }
);
