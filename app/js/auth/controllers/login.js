'use strict';

angular.module('evaluon.auth').controller('LoginCtrl', function($scope, Auth){

    $scope.user = {
        email: 'nombre@correo.co',
        password: 'contraseña'
    };

    $scope.login = function(event){
        event.preventDefault();

        Auth.clientCredentials().then(function(token){
            return Auth.password(
                token.token_type, token.access_token,
                $scope.user.email, $scope.user.password
            );
        }).then(function(token){
            console.log(token);
        }).catch(function(error){
            console.error(error);
        });

    };

});
