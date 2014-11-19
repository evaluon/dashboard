'use strict';

angular.module('evaluon.institution').controller(
    'AddGroupCtrl', function($scope, $mdDialog){

        
        $scope.add = function(){
            $mdDialog.hide($scope.question);
        };
    }
);
