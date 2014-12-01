'use strict';

angular.module('evaluon.evaluator').controller(
    'EvalueeTestCtrl', function($scope, $stateParams, Test){

        $scope.groupId = $stateParams.group;
        $scope.testId = $stateParams.id;


        $scope.evaluees = [];
        $scope.headers = [];


        $scope.getEvaluees = function(){
            Test.evalueesInTest(
                $scope.groupId, $scope.testId
            ).then(function(success){
                $scope.evaluees = success;
                if($scope.evaluees.length > 0) $scope.headers = Object.keys($scope.evaluees[0]);
            }).catch(function(error){
                console.error(error);
            });
        };

        $scope.getEvaluees();
    }
);
