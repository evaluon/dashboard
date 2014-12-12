'use strict';

angular.module('evaluon.evaluator').factory(
    'Evaluator', function(Auth, api, headers, $http, localStorageService){

        return {

            evaluatorList: function(){

                var user = Auth.userLogged(),
                    tokenType = user.token_type,
                    token = user.access_token;

                return $http({
                    method: 'get',
                    url: api.evaluator,
                    headers: {
                        Authorization: headers.authorization(tokenType, token)
                    }
                }).then(function(data){
                    return data.data.data;
                });

            },

            setEvaluator: function(evaluator, user){

                var tokenType = user.token_type,
                    token = user.access_token;

                return $http({
                    method: 'post',
                    url: api.evaluator,
                    headers: {
                        Authorization: headers.authorization(tokenType, token),
                        'Content-Type': headers.json
                    },
                    data: evaluator
                }).then(function(data){
                    return data.data.data;
                });

            },



        }

    }
);
