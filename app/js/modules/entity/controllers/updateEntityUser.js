'use strict';

angular.module('evaluon.auth').controller('UpdateEntityUserCtrl',

function($mdDialog, $scope, user, Auth, User, toast){

    $scope.user = angular.copy(user);
    $scope.user.id = Number(user.id);
    $scope.user.birth_date = new Date(user.birth_date);
    $scope.user.phone_number = Number(user.phone_number);

    $scope.title = user.id;

    $scope.update = function($event, user){
        $event.preventDefault();

        return User.updateUser(user).then(function(){
            toast.show('Usuario INCI actualizado correctamente');
        }).catch(function(result){
            toast.show(result.error);
        });
    };

    $scope.isValid = function(form, email){

        return form.$invalid || !$scope.validateEmail(email);
    };

});
