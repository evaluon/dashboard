'use strict';

angular.module('evaluon.evaluator').factory(
    'Group', function(Auth, api, headers, $http, localStorageService){

        var user = Auth.userLogged;

        return {

            evaluatorGroups: function(){

                return $http({
                    method: 'get',
                    url: api.evaluatorGroup,
                    headers: {
                        Authorization: headers.authorization(
                            user.token_type, user.access_token
                        )
                    }
                }).then(function(data){
                    return data.data.data;
                });

            }

        }

    }
);
