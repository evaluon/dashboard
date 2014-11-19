'use strict';

angular.module('evaluon.evaluator').controller(
    'TestCtrl', function($scope, $stateParams, GroupTest){
        $scope.groupId = $stateParams.id;
        $scope.tests = [];
        
        $scope.getTests = function(){
            GroupTest.groupTests($stateParams.id).then(function(success){
                $scope.tests = success;
            });
        };

        $scope.getTests();
    });
