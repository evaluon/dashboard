'use strict';

angular.module('evaluon.entity').controller(
    'EntityUserCtrl', function($scope, $mdDialog){

        $scope.users = [];

        $scope.getUsers = function(){
            console.log('si XD');
        };

        $scope.getUsers();

    }
);
