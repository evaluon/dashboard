'use strict';

angular.module('evaluon.auth').controller(
    'ChanguePasswordCtrl', function($scope, $mdToast, User){
        $scope.user = {};

        $scope.changePassword = function($event, user){

            $event.preventDefault();

            if(user.pass1 == user.pass2){
                User.updateUser({password: CryptoJS.SHA1(user.pass1).toString()}).then(function(success){
                    $mdToast.show({
                        template: '<md-toast>{0}</md-toast>'.format('Contraseña actualizada correctamente'),
                        hideDelay: 6000,
                        position: 'bottom left'
                    });
                });
            }
            else{
                $mdToast.show({
                    template: '<md-toast>{0}</md-toast>'.format('Las contraseñas no coinciden'),
                    hideDelay: 6000,
                    position: 'bottom left'
                });
            }
        };

    });
