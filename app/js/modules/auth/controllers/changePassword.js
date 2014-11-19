'use strict';

angular.module('evaluon.auth').controller(
    'ChanguePasswordCtrl', function($scope, $mdToast){
        $scope.user = {};

        $scope.changePassword = function($event, user){

            $event.preventDefault();

            console.log(user);

            if(user.pass1 == user.pass2){

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
