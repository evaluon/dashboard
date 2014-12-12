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

                var deferred = $q.defer();

                setTimeout(function(){
                    if(evaluee == '1110556776'){
                        deferred.reject({ message: "dont_delete_me" });
                    } else {
                        deferred.resolve(true);
                    }
                }, 1000);

                return deferred.promise;

            }

        }

    }
);
