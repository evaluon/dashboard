'use strict';

angular.module('evaluon.auth').controller(
    'RecoverPasswordCtrl', function($scope, $mdDialog, User, toast) {

        $scope.mail = '';

        $scope.recoverPassword = function(event){
            event.preventDefault();

            User.recoverPassword($scope.mail).then(function(success){
                toast.show('Revise el correo y siga las instrucciones');
                $mdDialog.hide();

            }).catch(function(error){
                toast.show('Usuario no existente');
                $mdDialog.hide();
            });
        };

    }
);
