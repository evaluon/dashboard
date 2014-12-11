'use strict';

angular.module('evaluon.auth').controller(
    'RecoverPasswordCtrl', function($scope, $mdDialog) {

        $scope.mail = '';

        $scope.recoverPassword = function(event){
            event.preventDefault();

            User.recoverPassword($scope.mail).then(function(){
                $mdDialog.hide();
            }).catch($mdDialog.hide);
        };

    }
);
