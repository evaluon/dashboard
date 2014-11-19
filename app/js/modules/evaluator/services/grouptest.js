'use strict';

angular.module('evaluon.evaluator').factory(
    'GroupTest', function(Auth, api, headers, $http, $q){

        var user = Auth.userLogged,
            tokenType = user.token_type,
            token = user.access_token;

        return {

            groupTests: function(group){

                return $http({
                    method: 'get',
                    url: api.id(api.testGroup, group),
                    headers: {
                        Authorization: headers.authorization(tokenType, token)
                    }
                }).then(function(data){
                    return data.data.data;
                })

            },

            addTest: function(group, test){

                $http({
                    method: 'post',
                    url: api.testGroup,
                    headers: {
                        Authorization: headers.authorization(tokenType, token),
                        'Content-Type': headers.json
                    },
                    data: {
                        group_id: group,
                        test_id: test
                    }
                }).then(function(test){
                    return test.data.data;
                });

            }

        };

    }
);
