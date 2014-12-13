'use strict';

angular.module('evaluon.entity').controller(
    'EntityUserCtrl', function($scope, $mdDialog, User){

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
        }

        $scope.getUsers();

    }
);
