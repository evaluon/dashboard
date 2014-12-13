'use strict';

angular.module('evaluon.entity').controller(
    'EntityUserCtrl', function($scope, $mdDialog, User, toast ){

        $scope.users = [];

        $scope.getUsers = function(){
            console.log('si XD');
            User.adminUsers().then(function(data){
                $scope.users = data;
            }).catch(function(error){
                console.log(error);
            });

        };

        $scope.addUser = function($event){
            $mdDialog.show({
                targetEvent: $event,
                templateUrl: 'views/entity/addEntityUser.tpl.html',
                controller: 'AddEntityUserCtrl',
                escapeToClose: true
            });
        };

        $scope.updateUser = function($event, user){
            $mdDialog.show({
                targetEvent: $event,
                templateUrl: 'views/entity/updateEntityUser.tpl.html',
                controller: 'UpdateEntityUserCtrl',
                escapeToClose: true,
                locals: {user: user}
            });
        };

        $scope.blockUser = function(id){
            User.blockUser(id).then(function(success){
                toast.show('Actualizado correctamente');
                $scope.getUsers();
            }).catch(function(error){
                toast.show(error.error);
            });

        };

        $scope.getUsers();

    }
);
