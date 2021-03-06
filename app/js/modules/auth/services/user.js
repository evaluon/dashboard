'use strict';

angular.module('evaluon.auth').factory(
    'User', function(api, Auth, headers, $http){

        return {

            getUser: function(tokenType, token){

                return $http({
                    method: 'get',
                    url: api.user,
                    headers: {
                        Authorization: headers.authorization(tokenType, token)
                    }
                }).then(function(data){
                    return data.data.data;
                });

            },

            createUser: function(options, token){

                var user = token || Auth.userLogged(),
                    tokenType = user.token_type,
                    token = user.access_token;

                return $http({
                    method: 'post',
                    url: api.user,
                    headers: {
                        Authorization: headers.authorization(tokenType, token),
                        'Content-Type': headers.json
                    },
                    data: options
                }).then(function(data){
                    return data.data.data;
                });

            },

            updateUser: function(options){

                var user = Auth.userLogged(),
                    tokenType = user.token_type,
                    token = user.access_token;

                return $http({
                    method: 'put',
                    url: api.user,
                    headers: {
                        Authorization: headers.authorization(tokenType, token),
                        'Content-Type': headers.json
                    },
                    data: options
                }).then(function(data){
                    return data.data.data;
                });

            },

            recoverPassword: function(mail){

                var user = Auth.client(),
                    tokenType = user.token_type,
                    token = user.access_token;

                return $http({
                    method: 'delete',
                    url: api.user,
                    headers: {
                        Authorization: headers.authorization(tokenType, token),
                        'Content-Type': headers.json
                    },
                    data: {
                        mail: mail
                    }
                }).then(function(data){
                    return data.data.data;
                });

            },

            blockUser: function(id){

                var user = Auth.userLogged(),
                    tokenType = user.token_type,
                    token = user.access_token;

                return $http({
                    method: 'delete',
                    url: api.id(api.user, id),
                    headers: {
                        Authorization: headers.authorization(tokenType, token)
                    }
                }).then(function(data){
                    return data.data.data;
                });

            },

            adminUsers: function(mail){

                var user = Auth.userLogged(),
                    tokenType = user.token_type,
                    token = user.access_token;

                return $http({
                    method: 'get',
                    url: api.adminUser,
                    headers: {
                        Authorization: headers.authorization(tokenType, token)
                    }
                }).then(function(data){
                    return data.data.data;
                });

            }



        };

    }
);
