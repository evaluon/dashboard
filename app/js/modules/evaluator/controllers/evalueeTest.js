'use strict';

angular.module('evaluon.evaluator').controller(
    'EvalueeTestCtrl', function($scope, $stateParams, $state, Test){

        $scope.groupId = $stateParams.group;
        $scope.testId = $stateParams.id;

        $scope.inInstitution = $state.includes('institution');
        $scope.inEvaluator= $state.includes('evaluator');

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
