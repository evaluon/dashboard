'use strict';

angular.module('evaluon.evaluator').controller(
    'EvalueeTestCtrl', function($scope, $stateParams, Test){

        $scope.groupId = $stateParams.group;
        $scope.testId = $stateParams.id;

        $scope.evaluees = [];

        $scope.getEvaluees = function(){
            Test.evalueesInTest($scope.groupId, $scope.testId).then(function(success){
                console.log(success);
                $scope.evaluees = success;
            });
        };

        $scope.getEvaluees();
    }
);
