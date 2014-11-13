'use strict';

angular.module('evaluon.auth').controller(
    'LoginCtrl', function($scope, Auth, access, localStorageService){

        $scope.user = {
            email: 'nombre@correo.co',
            password: 'contraseña'
        };

        $scope.login = function(event){
            event.preventDefault();

            var token = localStorageService.get(
                CryptoJS.SHA1(access.tokens.client).toString()
            );

            Auth.password(
                token.token_type, token.access_token,
                $scope.user.email, $scope.user.password
            ).then(function(token){
                localStorageService.set(
                    CryptoJS.SHA1(access.tokens.user).toString(), token
                );
            }).catch(function(error){
                console.error(error);
            });

        };

    }
);
