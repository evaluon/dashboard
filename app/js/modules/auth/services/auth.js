'use strict';

angular.module('evaluon.auth').factory('Auth', function(api, access, $http){

    return {

        clientCredentials: function(){

            return $http({
                method: 'post',
                url: api.token,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: $.param(access.client)
            }).then(function(data){
                return data.data;
            });

        },

        password: function(tokenType, accessToken, username, password){

            console.log(CryptoJS);

            return $http({
                method: 'post',
                url: api.token,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Authorization: '{0} {1}'.format(tokenType, accessToken)
                },
                data: $.param({
                    grant_type: 'password',
                    username: username,
                    password: CryptoJS.SHA1(password).toString()
                })
            }).then(function(data){
                return data.data;
            });

        }


    };


});
