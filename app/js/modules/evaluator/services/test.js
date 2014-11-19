'use strict';

angular.module('evaluon.evaluator').factory(
    'Test', function(Auth, api, headers, $http){

        var user = Auth.userLogged,
            tokenType = user.token_type,
            token = user.access_token;

        return {

            testDetail: function(id){

                return $http({
                    method: 'get',
                    url: api.id(api.test, id),
                    headers: {
                        Ahthorization: headers.authorization(tokenType, token)
                    }
                }).then(function(test){
                    return data.data.data;
                });

            },

            evalueesInTest: function(group, test){

                return $http({
                    method: 'get',
                    url: api.evalueesInTest(group, test),
                    headers: {
                        Ahthorization: headers.authorization(tokenType, token)
                    }
                }).then(function(test){
                    return data.data.data;
                });

            }

        }

    }
);
