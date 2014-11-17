'use strict';

angular.module('evaluon.auth').controller(
    'LoginCtrl',
    function($scope, $state, Auth, tokens, User, localStorageService){

        $scope.user = {
            email: 'nombre@correo.co',
            password: 'contraseña'
        };

        $scope.login = function(event){
            event.preventDefault();

            var token = localStorageService.get(
                CryptoJS.SHA1(tokens.client).toString()
            );

            Auth.password(
                token.token_type, token.access_token,
                $scope.user.email, $scope.user.password
            ).then(function(token){
                token = token;
                return User.getUser(token.token_type, token.access_token);
            }).then(function(user){
                console.log(user);
                token.role = user.role;
                localStorageService.set(
                    CryptoJS.SHA1(tokens.user).toString(), token
                );
                $state.go('anon.auth');
            }).catch(function(error){
                console.error(error);
            });

        };

        if(Auth.loggedUser) {
            $state.go('anon.auth');
        }

    }
);
