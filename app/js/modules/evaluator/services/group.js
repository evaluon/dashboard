'use strict';

angular.module('evaluon.evaluator').factory(
    'Group', function(Auth, api, headers, $http, localStorageService){

        var user = Auth.userLogged,
            tokenType = user.token_type,
            token = user.access_token;

        return {

            institutionGroups: function(institutionId){

                return $http({
                    method: 'get',
                    url: api.id(api.group, institutionId),
                    headers: {
                        Authorization: headers.authorization(tokenType, token)
                    }
                }).then(function(data){
                    return data.data.data;
                });

            },

            evaluatorGroups: function(){

                return $http({
                    method: 'get',
                    url: api.evaluatorGroup,
                    headers: {
                        Authorization: headers.authorization(tokenType, token)
                    }
                }).then(function(data){
                    return data.data.data;
                });

            },

            addGroup: function(group){

                return $http({
                    method: 'post',
                    url: api.group,
                    headers: {
                        Authorization: headers.authorization(tokenType, token),
                        'Content-Type': headers.json
                    },
                    data: group
                }).then(function(data){
                    return data.data.data;
                });

            },

            updateGroup: function(group){

                return $http({
                    method: 'put',
                    url: api.group,
                    headers: {
                        Authorization: headers.authorization(tokenType, token),
                        'Content-Type': headers.json
                    },
                    data: group
                }).then(function(data){
                    return data.data.data;
                });

            },

            groupEvaluees: function(group){

                return $http({
                    method: 'get',
                    url: api.groupEvaluees(group),
                    headers: {
                        Authorization: headers.authorization(tokenType, token),
                    }
                }).then(function(data){
                    return data.data.data;
                });

            }

        }

    }
);
