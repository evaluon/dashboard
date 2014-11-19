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

            },

            createTest: function(test){

                return $http({
                    method: 'post',
                    url: api.test,
                    headers: {
                        Authorization: headers.authorization(tokenType, token),
                        'Content-Type': headers.json
                    },
                    data: test
                }).then(function(data){
                    return data.data.data;
                });

            }

        }

    }
);
