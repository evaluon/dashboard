'use strict';

angular.module('evaluon.auth').factory('Auth',
function(
    api, headers, tokens, access, User, $rootScope, $http, localStorageService
){

    var uToken = localStorageService.get(CryptoJS.SHA1(tokens.user).toString());

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
        password: function(tokenType, accessToken, username, password){
            return $http({
                method: 'post',
                url: api.token,
                headers: {
                    'Content-Type': headers.urlencoded,
                    Authorization: headers.authorization(tokenType, accessToken)
                },
                data: $.param(access.password(username, password))
            }).then(function(data){
                return data.data;
            });
        },
        logout: function(){
            localStorageService.remove(CryptoJS.SHA1(tokens.user).toString());
        },
        userLogged: uToken

    };


});
