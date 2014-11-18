'use strict';

angular.module('evaluon.evaluator').factory(
    'Group', function(Auth, api, headers, $http, $q){

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

            },

            addEvaluee: function(group, evaluees){

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
