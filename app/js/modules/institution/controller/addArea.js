'use strict';

angular.module('evaluon.institution').controller(
    'AddAreaCtrl', function($scope){

        $scope.add = function($event, data){
            $event.preventDefault();
        };
    }
);
