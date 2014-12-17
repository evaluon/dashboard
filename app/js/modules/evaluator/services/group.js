'use strict';

angular.module('evaluon.evaluator').factory(
    'Group', function(Auth, api, headers, $http, $q){

        var user = Auth.userLogged(),
            tokenType = user.token_type,
            token = user.access_token;

        return {

            institutionGroups: function(institutionId){

                var user = Auth.userLogged(),
                    tokenType = user.token_type,
                    token = user.access_token;

                return $http({
                    method: 'get',
                    url: api.id(api.group, institutionId),
                    headers: {
                        Authorization: headers.authorization(tokenType, token)
                    }
                }).then(function(response){
                    return response.data.data;
                });

            },

            evaluatorGroups: function(){

                var user = Auth.userLogged(),
                    tokenType = user.token_type,
                    token = user.access_token;

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

            findEvaluatorGroups: function(id){

                var user = Auth.userLogged(),
                tokenType = user.token_type,
                token = user.access_token;

                return $http({
                    method: 'get',
                    url: api.id(api.evaluatorGroup, id),
                    headers: {
                        Authorization: headers.authorization(tokenType, token)
                    }
                }).then(function(data){
                    return data.data.data;
                });

            },

            addGroup: function(group){

                var user = Auth.userLogged(),
                    tokenType = user.token_type,
                    token = user.access_token;

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

                var user = Auth.userLogged(),
                    tokenType = user.token_type,
                    token = user.access_token;

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

                var user = Auth.userLogged(),
                    tokenType = user.token_type,
                    token = user.access_token;

                return $http({
                    method: 'get',
                    url: api.groupEvaluees(group),
                    headers: {
                        Authorization: headers.authorization(tokenType, token),
                    }
                }).then(function(data){
                    return data.data.data;
                });

            },

            addEvaluee: function(group, evaluees){

                var user = Auth.userLogged(),
                    tokenType = user.token_type,
                    token = user.access_token;

                return $http({
                    method: 'put',
                    url: api.groupEvaluees(group),
                    headers: {
                        Authorization: headers.authorization(tokenType, token),
                    },
                    data: {
                        users: evaluees
                    }
                }).then(function(data){
                    return data.data.success;
                });

            },

            deleteEvaluee: function(group, evaluee){

                var user = Auth.userLogged(),
                    tokenType = user.token_type,
                    token = user.access_token;

                return $http({
                    method: 'delete',
                    url: api.groupEvaluee,
                    headers: {
                        Authorization: headers.authorization(tokenType, token),
                        'Content-Type': headers.json
                    },
                    data: {
                        evaluee_id: evaluee,
                        group_id: group
                    }
                }).then(function(data){
                    return data.data.success;
                });

            }

        }

    }
);
