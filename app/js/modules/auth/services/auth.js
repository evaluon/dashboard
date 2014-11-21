'use strict';

angular.module('evaluon.auth').factory('Auth',
function($http, api, headers, tokens, access, localStorageService){

    return {

        clientCredentials: function(){
            return $http({
                method: 'post',
                url: api.token,
                headers: {
                    'Content-Type': headers.urlencoded
                },
                data: $.param(access.client)
            }).then(function(data){
                return data.data;
            });
        },
        password: function(username, password){
            var client = this.client(),
                tokenType = client.token_type,
                token = client.access_token;

            return $http({
                method: 'post',
                url: api.token,
                headers: {
                    'Content-Type': headers.urlencoded,
                    Authorization: headers.authorization(tokenType, token)
                },
                data: $.param(access.password(username, password))
            }).then(function(data){
                return data.data;
            });
        },
        refresh: function(tokenType, token, refreshToken){
            return $http({
                method: 'post',
                url: api.token,
                headers: {
                    'Content-Type': headers.urlencoded,
                    Authorization: headers.authorization(tokenType, token)
                },
                data: $.param(access.refresh(refreshToken))
            }).then(function(data){
                return data.data;
            });
        },
        userLogged: function(){
            return localStorageService.get(
                CryptoJS.SHA1(tokens.user).toString()
            );
        },
        login: function(user){
            localStorageService.set(
                CryptoJS.SHA1(tokens.user).toString(), user
            );
        },
        logout: function(){
            localStorageService.remove(
                CryptoJS.SHA1(tokens.user).toString()
            );
        },
        client: function(){
            return localStorageService.get(
                CryptoJS.SHA1(tokens.client).toString()
            );
        },
        setClient: function(client){
            localStorageService.set(
                CryptoJS.SHA1(tokens.client).toString(), client
            );
        },
        unsetClient: function(){
            localStorageService.remove(
                CryptoJS.SHA1(tokens.client).toString()
            );
        }

    };


});
