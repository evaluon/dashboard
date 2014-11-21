'use strict';

angular.module('evaluon.auth').controller(
    'LoginCtrl', function($scope, $state, Auth, User){

        $scope.user = {
            email: '',
            password: ''
        };

        $scope.login = function(event){
            event.preventDefault();

            var uToken;

            Auth.password(
                $scope.user.email, $scope.user.password
            ).then(function(token){
                uToken = token;
                return User.getUser(token.token_type, token.access_token);
            }).then(function(user){
                user.role = user.role;
                Auth.login(uToken);
                $state.go('anon.auth');
            }).catch(function(error){
                console.error(error);
            });

        };

        if(Auth.userLogged()) {
            $state.go('anon.auth');
        }

    }
);
