'use strict';

angular.module('evaluon.entity').factory(
    'Statistics', function(Auth, api, headers, $http){

        return {

            evalueeList: function(){

                var user = Auth.userLogged();

                return $http({
                    method: 'get',
                    url: api.evaluee,
                    headers: {
                        Authorization: headers.authorization(
                            user.token_type, user.access_token
                        )
                    }
                }).then(function(results){
                    return results.data.data;
                });

            },

            evalueeDescription: function(){

                var user = Auth.userLogged();

                return $http({
                    method: 'get',
                    url: api.evalueeDescription,
                    headers: {
                        Authorization: headers.authorization(
                            user.token_type, user.access_token
                        )
                    }
                }).then(function(results){
                    return results.data.data;
                });

            }

        }


    }
);
