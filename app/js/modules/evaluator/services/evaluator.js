'use strict';

angular.module('evaluon.evaluator').factory(
    'Evaluator', function(Auth, api, headers, $http, localStorageService){

        if(Auth.userLogged()){
            var user = Auth.userLogged(),
            tokenType = user.token_type,
            token = user.access_token;
        }

        return {

            evaluatorList: function(){

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

                return $http({
                    method: 'post',
                    url: api.evaluator,
                    headers: {
                        Authorization: headers.authorization(
                            user.token_type || tokenType,
                            user.access_token || token
                        ),
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
