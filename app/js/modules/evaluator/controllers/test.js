'use strict';

angular.module('evaluon.evaluator').controller(
    'TestCtrl', function($scope, $stateParams){
        $scope.groupId = $stateParams.id;
        $scope.tests = [];
        $scope.getTests = function(){

        };
    });
